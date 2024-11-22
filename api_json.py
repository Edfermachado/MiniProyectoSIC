from fastapi import FastAPI, Body
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import pandas as pd

app = FastAPI(title="Mi primera aplicación con FastAPI", version="0.0.1")

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

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

# In Progress

@app.get("/predict_salary/{job_title}/{year}",tags=["Read File"])
async def predict_salary(job_title, year, csv_file='data_science_salaries.csv'):

    
    try:
        df = pd.read_csv(csv_file)  # Replace with correct path

        df_filtered = df[df['job_title'] == job_title]

    
        if df_filtered.empty:
            return {"error": f"No se encontraron datos para el puesto: {job_title}"}
        
        # ... (rest of the code)

    except FileNotFoundError:
        return {"error": "CSV file not found"}
    except ValueError:
        return {"error": "Invalid input data"}
    except Exception as e:
        return {"error": str(e)}
        
    
    x = df_filtered['work_year']
    y = df_filtered['salary_in_usd']
        

    n = len(x)
    sum_x = x.sum()
    sum_y = y.sum()
    sum_xy = (x * y).sum()
    sum_x_squared = (x ** 2).sum()

    m = (n * sum_xy - sum_x * sum_y) / (n * sum_x_squared - sum_x ** 2)
    b = (sum_y - m * sum_x) / n

        
    predicted_salary = m * int(year) + b

    return int(predicted_salary)

    return {
        "job_title": job_title,
        "year": year,
        "predicted_salary": f"{predicted_salary:,.2f}",
        "m": f"{m:,.2f}",
        "b": f"{b:,.2f}"
    }