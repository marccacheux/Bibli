from flask import Flask, url_for, redirect, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

mongoClient = MongoClient('mongodb://127.0.0.1:27017')
db = mongoClient.get_database('users_db')
users_col = db.get_collection('users_col')

# @app.route('/addname/<name>/')
# def addname(name):
#     names_col.insert_one({"name": name.lower()})
#     return redirect(url_for('getnames'))

# @app.route('/getnames/')
# def getnames():
#     names_json = []
#     if names_col.find({}):
#         for name in names_col.find({}).sort("name"):
#             names_json.append({"name": name['name'], "id": str(name['_id'])})
#     return json.dumps(names_json)

@app.route('/user', methods=['GET', 'POST'])
def adduser():
    if request.method == 'POST':
        body = request.json
        username = body["username"]
        name = body["name"]
        lastname = body["lastname"]
        password = body["password"]
        email = body["email"]
        address = body["address"]
        birthday = body["birthday"]
        avatar = body["avatar"]
        admin = body["admin"]
        
        users_col.insert_one({"username": username,
                            "name": name,
                            "lastname": lastname,
                            "password": password,
                            "email": email,
                            "address": address,
                            "birthday": birthday,
                            "avatar": avatar,
                            "admin": admin,
                            })
    return '200 ok'

if __name__ == "__main__":
    app.run(debug=True)
