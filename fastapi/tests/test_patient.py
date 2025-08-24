from fastapi.testclient import TestClient
from unittest.mock import patch, Mock
from main import app
from tests.conftest import mock_patient_response


client = TestClient(app)


@patch('get_patient.patient.requests.get')
def test_patient_success(mock_get):
    """Test successful patient lookup"""
    mock_get.return_value = mock_patient_response()

    response = client.get(
        "/get-patient/?patient_id=222333444&surname=smith&dob=2000-03-02")

    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "success"


@patch('get_patient.patient.requests.get')
def test_patient_not_found(mock_get):
    """Test patient not found"""
    mock = Mock()
    mock.status_code = 404
    mock_get.return_value = mock

    response = client.get(
        "/get-patient/?patient_id=999999999&surname=doe&dob=2000-01-01")

    assert response.status_code == 200
    data = response.json()
    assert data["error"] == "not found"


@patch('get_patient.patient.requests.get')
def test_patient_underage(mock_get):
    """Test underage patient"""
    mock = Mock()
    mock.status_code = 200
    mock.json.return_value = {
        "nhsNumber": "222333444",
        "name": "SMITH, Alice",
        "born": "02-03-2020"  # Recent date = underage
    }
    mock_get.return_value = mock

    response = client.get(
        "/get-patient/?patient_id=222333444&surname=smith&dob=2020-03-02")

    assert response.status_code == 200
    data = response.json()
    assert data["error"] == "underage"
