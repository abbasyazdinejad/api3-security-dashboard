from flask import Flask
from flask import Flask, jsonify, request, render_template
from datetime import datetime
import json


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/")
def res():
    return render_template("result.html")   
  