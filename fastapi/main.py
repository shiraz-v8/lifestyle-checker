from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from get_score import score, get_scoring_data
from get_patient import patient


app = FastAPI()


origins = ["http://localhost:3000", "http://127.0.0.1:5005"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(score.router)
app.include_router(patient.router)
app.include_router(get_scoring_data.router)


@app.get("/")
def get_api_status():
    return {"status": "fastapi server running live."}


if __name__ == "__main__":
    print(f"Starting server on port - 5005 🚀")
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5005, reload=True)
