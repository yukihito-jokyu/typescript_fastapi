from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

HOST = "127.0.0.1"
PORT = 7777

app = FastAPI()

# CORSの設定
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_methods=["*"], allow_headers=["*"]
)


# リクエストのモデルの定義
class Numbers(BaseModel):
    num1: int
    num2: int


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/add")
async def add_numbers_post(numbers: Numbers):
    num1 = numbers.num1
    num2 = numbers.num2
    result = num1 + num2
    return {"result": result}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host=HOST, port=PORT)
