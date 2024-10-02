@echo off
start cmd /k "cd ./dev/typescript && npm i && npm start"
start cmd /k "cd ./dev/fastapi && rye sync && .venv\Scripts\activate && python app.py"
