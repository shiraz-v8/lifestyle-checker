from typing import Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/get-score", tags=["Score"])

score_table = {
    "Q1": {"16-21": 1, "22-40": 2, "41-65": 3, "64+": 3},
    "Q2": {"16-21": 2, "22-40": 2, "41-65": 2, "64+": 3},
    "Q3": {"16-21": 1, "22-40": 3, "41-65": 2, "64+": 1},
}


class ScoreRequest(BaseModel):
    age: str
    answers: Dict[str, str]


def get_age_range(age: int) -> str:
    if age <= 16:

        raise HTTPException(
            status_code=401, detail="This test is not for you.")
    if 16 <= age <= 21:
        return "16-21"
    elif 22 <= age <= 40:
        return "22-40"
    elif 41 <= age <= 65:
        return "41-65"
    return "64+"


def calculate_age(dob: str) -> int:
    """
    dob: string in YYYY-MM-DD format
    returns: age in years
    """
    birth_date = datetime.strptime(dob, "%Y-%m-%d")
    today = datetime.today()

    age = today.year - birth_date.year

    # in case bd has not happened
    if (today.month, today.day) < (birth_date.month, birth_date.day):
        age -= 1

    return age


@router.post("/")
def calculate_score(request: ScoreRequest):
    get_age = calculate_age(request.age)
    age_range = get_age_range(get_age)
    total_score = 0

    for question, answer in request.answers.items():
        points = score_table.get(question, {}).get(age_range, 0)
        if question in ['Q1', 'Q2'] and answer.lower() == "yes":
            total_score += points
        elif question in ['Q3'] and answer.lower() == "no":
            total_score += points

    outcome = "Well done" if total_score <= 3 else "Needs improvement"

    return {"score": total_score, "outcome": outcome, "age_group": age_range}
