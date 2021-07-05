from flask import Flask, send_from_directory
import json

app = Flask(__name__,
            static_url_path='', 
            static_folder='client/build',
            template_folder='client/build'
        )

@app.route('/users')
def users():
    users = [{"name": "Bob"}];
    return json.dumps(users)

@app.route('/')
def index():
    return app.send_static_file('index.html')
