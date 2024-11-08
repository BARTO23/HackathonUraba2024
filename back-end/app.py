from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="amigo",
        database="dbs_hackathon",
        port="3306"
    )
    return conn
@app.route('/get_users', methods=['GET'])
def get_users():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM tbl_clientes")
    data = cursor.fetchall()
    
    # Specify column names based on your table structure
    column_names = [column[0] for column in cursor.description]

    # Convert to list of dictionaries
    results = [dict(zip(column_names, row)) for row in data]

    conn.close()
    return jsonify(results)


@app.route('/add_user', methods=['POST'])
def add_user():
    conn = get_db_connection()
    cursor = conn.cursor()

    new_item = request.json['item']
    cursor.execute(""" INSERT INTO tbl_clientes (documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, contacto, correo, detalle_cuenta) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) 
    """, (
        new_item['documento'],
        new_item['primer_nombre'],
        new_item.get('segundo_nombre', None),
        new_item['primer_apellido'],
        new_item.get('segundo_apellido', None),
        new_item['direccion'],
        new_item['contacto'],
        new_item['correo'],
        new_item.get('detalle_cuenta', None)
    ))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Item added successfully'}), 201

# @app.route('/get_users', methods=['GET', 'POST'])
# def get_users():
#     conn = get_db_connection()
#     cursor = conn.cursor()

#     if request.method == 'POST':
#         new_item = request.json['item']
#         cursor.execute(""" INSERT INTO tbl_clientes (documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, contacto, correo, detalle_cuenta) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) """, (new_item['documento'],new_item['primer_nombre'],new_item.get('segundo_nombre', None),new_item['primer_apellido'],new_item.get('segundo_apellido', None),new_item['direccion'],new_item['contacto'],new_item['correo'],new_item.get('detalle_cuenta', None)))
#         conn.commit()
#         return jsonify({'message': 'Item added successfully'}), 201

#     cursor.execute("SELECT * FROM tbl_clientes")
#     data = cursor.fetchall()
    
#     # Specify column names based on your table structure
#     column_names = [column[0] for column in cursor.description]

#     # Convert to list of dictionaries
#     results = [dict(zip(column_names, row)) for row in data]

#     conn.close()
#     return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)