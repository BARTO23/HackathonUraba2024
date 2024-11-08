from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="prueba_triggers",
        port="3306"
    )
    return conn

@app.route('/prueba', methods=['GET', 'POST'])
def prueba():
    conn = get_db_connection()
    cursor = conn.cursor()

    if request.method == 'POST':
        new_item = request.json['item']
        cursor.execute("INSERT INTO tbl_rol (descripcion) VALUES (%s)", (new_item,))
        conn.commit()
        return jsonify({'message': 'Item added successfully'}), 201

    cursor.execute("SELECT * FROM tbl_rol")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)