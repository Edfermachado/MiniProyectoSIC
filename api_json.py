from fastapi import FastAPI, Body
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from typing import Optional
import pandas as pd

app = FastAPI(title="Mi primera aplicación con FastAPI", version="0.0.1")

@app.get('/', tags=['Home'])
def home():
    return "Hola mundo!!"

# @app.get('/movies/{id}', tags=['Movies'])
# def get_movie(id : int):
#     for movie in movies :
#         if movie['id'] == id :
#             return movie
#     return {}

@app.get('/', tags=[''])
def get_asd(id : int):
    return {}

# En progreso