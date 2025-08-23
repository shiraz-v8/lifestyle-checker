# Lifestyle Checker

A React web app for tracking and analyzing lifestyle habits with FastAPI backend.

## 🚀 Demo

Once you start the fastAPI server you can directly access:
[Frontend Demo GH Pages](https://shiraz-v8.github.io/lifestyle-checker/)

## 📋 Documentation

- [Figma - Planning & Brainstorming](https://www.figma.com/board/Rc7MMYz6pCVhW7qcjcUwFe/Untitled?node-id=0-1&t=MgFMXY1wRJDC2OYu-1)
- [Dynamic Scoring System - Notion API](https://www.notion.so/spiralz/lifestyle-checker-2589fe8b1f7c80bfb96eee1bbf7bbe25) (Step 3 - Notion Scoring Page)
- [FastAPI Documention](http://localhost:5005/docs) (OpenAPI Endpoint docs)

## 🏃‍♂️ Quick Start

### Frontend

```bash
cd lifestyle-checker
npm i
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd fastapi
source venv/bin/activate
pip install -r requirements.txt
python3 main.py
```

_Note: Backend is not deployed_

## 📦 Available Scripts

- `npm start` - Development server
- `npm test` - Run tests
- `npm run build` - Production build
- `npm run lint:js` - Lint JavaScript files
- `npm run eject` - Eject configuration (irreversible)

## 🛠️ Web App is built With

- React (Create React App)
- Framer Motion (User journeys & animations)
- Tailwind x Styled Components
- FastAPI
- Pydantic
- Python

For detailed Create React App documentation, visit [CRA Docs](https://facebook.github.io/create-react-app/docs/getting-started)

## Working with the API Data

The API accepts the following data:

| NHS Number | Name          | Age | DOB        |
| ---------- | ------------- | --- | ---------- |
| 111222333  | DOE, John     | 18  | 2007-01-14 |
| 222333444  | SMITH, Alice  | 25  | 2000-03-02 |
| 333444555  | CARTER, Bob   | 46  | 1979-05-20 |
| 444555666  | BOND, Charles | 70  | 1955-07-18 |
| 555666777  | MAY, Megan    | 14  | 2011-11-14 |
