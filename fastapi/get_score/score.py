from fastapi import APIRouter, HTTPException
from notion_client import Client
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from get_score import get_scoring_data
from datetime import datetime

load_dotenv()

router = APIRouter(prefix="/score", tags=["Score Data"])

token = os.getenv("NOTION_TOKEN")
page_id = os.getenv("PAGE_ID")

notion = Client(auth=token)


class ScoreRequest(BaseModel):
    age: str
    answers: dict


def calculate_score(birth_date: str, answers: dict):

    rules = get_scoring_data.fetch_scoring_rules()
    scoring_rules = rules["scoring_rules"]

    birth_year = datetime.strptime(birth_date, "%Y-%m-%d").year
    current_year = datetime.now().year
    age = current_year - birth_year

    age_group = None
    for age_range in scoring_rules["age_ranges"]:
        if age_range["min"] <= age <= age_range["max"]:
            age_group = age_range["label"]
            break

    if not age_group:
        raise HTTPException(status_code=400, detail="Age not in valid range")

    score = 0
    questions = scoring_rules["questions"]

    for question_id, answer in answers.items():
        if question_id in questions:
            question_rule = questions[question_id]

            should_award_points = False
            if question_rule.get("yes") and answer.lower() == "yes":
                should_award_points = True
            elif question_rule.get("no") and answer.lower() == "no":
                should_award_points = True

            if should_award_points:
                score += question_rule["points"][age_group]

    message, outcome = None, None

    for outcome in scoring_rules["outcomes"]:
        if "max_score" in outcome and score <= outcome["max_score"]:
            message = outcome["message"]
            outcome = outcome['outcome']
            break
        elif "min_score" in outcome and score >= outcome["min_score"]:
            message = outcome["message"]
            outcome = outcome['outcome']
            break

    if not message:
        message = "Score calculated but no matching outcome found"

    return {
        "age": age,
        "age_group": age_group,
        "answers": answers,
        "score": score,
        "message": message,
        "outcome": outcome
    }


@router.post("/calculate")
def calculate_lifestyle_score(request: ScoreRequest):
    return calculate_score(request.age, request.answers)
