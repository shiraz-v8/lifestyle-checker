import requests
from datetime import datetime
from pydantic import BaseModel
from typing import Optional
from fastapi import APIRouter,  HTTPException
from dotenv import load_dotenv
import os


load_dotenv()

KEY = os.getenv("API_KEY")
router = APIRouter(prefix="/get-patient", tags=["Patient"])


class PatientQuery(BaseModel):
    patient_id: str
    ref: Optional[str] = None
    surname: Optional[str] = None
    dob: Optional[str] = None


def calculate_age(dob_str: str) -> int:
    dob = datetime.strptime(dob_str, "%d-%m-%Y")
    today = datetime.today()
    return (today - dob).days // 365


def not_found():
    return {"error": "not found", "message": "Your details could not be found."}


def details_mismatch():
    return {"error": "mismatch", "message": "Your details could not be found."}


def underage():
    return {"error": "underage", "message": "You are not eligible for this service."}


mock = {
    "nhsNumber": "222333444",
    "name": "SMITH, Alice",
    "born": "02-03-2000"
}


@router.get("/")
def get_patient(patient_id: str, surname: str, dob: str):
    """
    Check patient details and return 4 possible outcomes
    """
    url = f"https://al-tech-test-apim.azure-api.net/tech-test/t2/patients/{patient_id}"
    headers = {'Ocp-Apim-Subscription-Key': KEY}
    response = requests.get(url, headers=headers)

    if response.status_code == 404:
        return not_found()

    if response.status_code == 400:
        return not_found()

    data = response.json()

    # api data
    api_surname = data.get("name", "").split(",")[0].strip().lower()
    api_dob = data.get("born", "")

    # Convert user date of bitrh
    try:
        parse_date = datetime.strptime(dob, "%Y-%m-%d")
        uk_date_format = parse_date.strftime("%d-%m-%Y")
    except ValueError:
        raise HTTPException(
            status_code=400, detail="Invalid date format, expected YYYY-MM-DD")

    age = calculate_age(api_dob)
    if age < 16:
        return underage()

    if surname and surname.strip().lower() != api_surname:
        return details_mismatch()

    if uk_date_format != api_dob:
        return details_mismatch()

    return {
        "status": "success",
        "error": False,
        "message": "Good news, we have verified your info.",
        "data": data,
    }
