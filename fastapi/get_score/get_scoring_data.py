from fastapi import APIRouter, HTTPException
from notion_client import Client
import json
from dotenv import load_dotenv
import os


load_dotenv()

router = APIRouter(prefix="/get-score-data", tags=["Score Data"])


token = os.getenv("NOTION_TOKEN")
page_id = os.getenv("PAGE_ID")


notion = Client(auth=token)


def get_json_from_notion(page_id: str):
    try:

        blocks = notion.blocks.children.list(block_id=page_id)

        for block in blocks.get("results", []):
            if block["type"] == "code":
                rich_text = block["code"]["rich_text"]
                if rich_text:
                    code_text = rich_text[0]["plain_text"]
                    return json.loads(code_text)

        return None
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching data: {str(e)}")


def fetch_scoring_rules():
    rules = get_json_from_notion(page_id)
    if not rules:
        raise HTTPException(status_code=404, detail="No JSON found in page")
    return rules


@router.get("/")
def get_scores():
    return fetch_scoring_rules()
