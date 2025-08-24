from tests.conftest import mock_scoring_rules
from fastapi.testclient import TestClient
from unittest.mock import patch
from main import app
from tests.conftest import mock_notion_response


client = TestClient(app)


@patch('get_score.get_scoring_data.notion')
def test_get_score_data(mock_notion):
    """Test getting scoring data"""
    mock_notion.blocks.children.list.return_value = mock_notion_response()

    response = client.get("/get-score-data/")

    assert response.status_code == 200
    data = response.json()
    assert "scoring_rules" in data


@patch('get_score.score.get_scoring_data.fetch_scoring_rules')
def test_calculate_score(mock_fetch_rules):
    mock_fetch_rules.return_value = mock_scoring_rules()

    payload = {
        "age": "1996-03-02",
        "answers": {"Q1": "no", "Q2": "no", "Q3": "no"}
    }

    response = client.post("/score/calculate", json=payload)

    assert response.status_code == 200
    data = response.json()
    assert data["score"] == 1
    assert data["outcome"] == "Well done"


def test_main_status():
    """Test main app status"""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"status": "fastapi server running live."}
