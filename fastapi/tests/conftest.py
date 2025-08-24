import sys
import os
from unittest.mock import Mock

# this is importing main!
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))


def mock_patient_response():
    mock = Mock()
    mock.status_code = 200
    mock.json.return_value = {
        "nhsNumber": "222333444",
        "name": "SMITH, Alice",
        "born": "02-03-2000"
    }
    return mock


def mock_notion_response():
    return {
        "results": [{
            "type": "code",
            "code": {
                "rich_text": [{
                    "plain_text": '{"scoring_rules": {"age_ranges": [{"min": 16, "max": 29, "label": "16-21"}, {"min": 22, "max": 40, "label": "22-40"}, {"min": 41, "max": 65, "label": "41-65"}, {"min": 66, "max": 120, "label": "64+"}], "questions": {"Q1": {"yes": true, "points": {"16-21": 1, "22-40": 2, "41-65": 3, "64+": 3}}, "Q2": {"yes": true, "points": {"16-21": 2, "22-40": 2, "41-65": 2, "64+": 3}}, "Q3": {"no": true, "points": {"16-21": 1, "22-40": 3, "41-65": 2, "64+": 1}}}, "outcomes": [{"max_score": 3, "outcome": "Well done", "message": "Thank you for answering our questions, we dont need to see you at this time. Keep up the good work!"}, {"min_score": 4, "outcome": "Needs improvement", "message": "We think there are some simple things you could do to improve your quality of life, please phone to book an appointment"}]}}'
                }]
            }
        }]
    }


def mock_scoring_rules():
    return {
        "scoring_rules": {
            "age_ranges": [
                {"min": 16, "max": 29, "label": "16-21"},
                {"min": 22, "max": 40, "label": "22-40"},
                {"min": 41, "max": 65, "label": "41-65"},
                {"min": 66, "max": 120, "label": "64+"}
            ],
            "questions": {
                "Q1": {"yes": True, "points": {"16-21": 1, "22-40": 2, "41-65": 3, "64+": 3}},
                "Q2": {"yes": True, "points": {"16-21": 2, "22-40": 2, "41-65": 2, "64+": 3}},
                "Q3": {"no": True, "points": {"16-21": 1, "22-40": 3, "41-65": 2, "64+": 1}}
            },
            "outcomes": [
                {"max_score": 3, "outcome": "Well done",
                    "message": "Thank you for answering our questions, we don't need to see you at this time. Keep up the good work!"},
                {"min_score": 4, "outcome": "Needs improvement",
                    "message": "We think there are some simple things you could do to improve your quality of life, please phone to book an appointment"}
            ]
        }
    }
