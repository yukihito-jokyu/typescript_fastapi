@echo off
start cmd /k "cd ./dev/typescript && npm i && npm start"
start cmd /k "cd ./dev/backend && rye sync && .venv\Scripts\activate && uvicorn app:app --reload"
