# import necessary libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
#################################################
# Flask Setup
#################################################

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy

# IS_HEROKU = False
# if('IS_HEROKU' in os.environ):
#     IS_HEROKU = True

# if (IS_HEROKU):
#     local_host = os.environ['local_host']
#     local_port = os.environ['local_port']
#     local_db = os.environ['local_db']
#     local_user = os.environ['local_user']
#     local_pwd = os.environ['loca_pwd']    
#     API_KEY = os.environ['mapboxkey']
# else:
#     from config import local_host, local_port, local_db, local_user, local_pwd 

# engine = create_engine(f"postgres://{local_user}:{local_pwd}@{local_host}:{local_port}/{local_db}")
# conn = engine.connect()

# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')

db = SQLAlchemy(app)

from .models import Pet

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/map")
def home():
    return render_template("map.html")    

@app.route("/plot")
def plot():
    return render_template("plot.html")

@app.route("/table")
def table():
    return render_template("table.html")

# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        name = request.form["petName"]
        lat = request.form["petLat"]
        lon = request.form["petLon"]

        pet = Pet(name=name, lat=lat, lon=lon)
        db.session.add(pet)
        db.session.commit()
        return redirect("/", code=302)

    return render_template("form.html")

@app.route("/mapboxkey", methods=["GET", "POST"])
def mapbox():
    """Return the recommendations page."""
    if request.method == "POST":
        return 200

    else:
        return json.dumps(API_KEY)    


@app.route("/api/pals")
def pals():
    results = db.session.query(Pet.name, Pet.lat, Pet.lon).all()

    hover_text = [result[0] for result in results]
    lat = [result[1] for result in results]
    lon = [result[2] for result in results]

    pet_data = [{
        "type": "scattergeo",
        "locationmode": "USA-states",
        "lat": lat,
        "lon": lon,
        "text": hover_text,
        "hoverinfo": "text",
        "marker": {
            "size": 50,
            "line": {
                "color": "rgb(8,8,8)",
                "width": 1
            },
        }
    }]

    return jsonify(pet_data)


if __name__ == "__main__":
    app.run()
