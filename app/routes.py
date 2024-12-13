from flask import render_template, jsonify, request
from app import app
import pandas as pd
import os

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_excel', methods=['POST'])
def process_excel():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        df = pd.read_excel(file)
        # Process your Excel file here similar to your React logic
        # Return the processed data
        return jsonify({'data': df.to_dict('records')})
    except Exception as e:
        return jsonify({'error': str(e)}), 500 