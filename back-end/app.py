from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import mysql.connector
import os
from dotenv import load_dotenv

# Cargar las variables de entorno
load_dotenv()

# Configuración de la aplicación Flask
app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')  # Email del remitente
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')  # Contraseña del remitente
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

# Inicializar Flask-Mail
mail = Mail(app)

# Función para conectarse a la base de datos MySQL
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="admin",
        database="dbs_hackathon_prueba"
    )

def enviar_correo(destinatario, asunto, mensaje_html):
    try:
        msg = Message(subject=asunto, recipients=[destinatario], html=mensaje_html)
        mail.send(msg)
        print("Correo enviado exitosamente.")
    except Exception as e:
        print(f"Error al enviar el correo: {e}")

# Función para actualizar el estado de la petición en la base de datos y enviar el correo
def actualizar_estado_peticion(id_peticion, nuevo_estado, correo_usuario):
    # Conexión a MySQL para actualizar el estado en la tabla peticiones
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Actualiza el estado de la petición en la base de datos
    cursor.execute("UPDATE tbl_peticiones SET estado = %s WHERE id = %s", (nuevo_estado, id_peticion))
    conn.commit()
    
    # Cierra la conexión a la base de datos
    cursor.close()
    conn.close()

    # Enviar correo de notificación al usuario
    asunto = "Actualización de estado de su petición"
    mensaje_html = f"""
    <h1>Estado de su petición actualizado</h1>
    <p>Su petición con ID {id_peticion} ha cambiado de estado a: <strong>{nuevo_estado}</strong></p>
    <p>Gracias por usar nuestra plataforma PQR.</p>
    """
    enviar_correo(correo_usuario, asunto, mensaje_html)

# Ruta API para actualizar el estado de la petición y notificar al usuario
@app.route('/api/actualizar-estado', methods=['POST'])
def actualizar_estado():
    try:
        data = request.get_json()  # Obtén los datos de la solicitud JSON
        id_peticion = data['id_peticion']
        nuevo_estado = data['nuevo_estado']
        correo_usuario = data['correo_usuario']

        # Llama a la función para actualizar el estado y enviar el correo
        actualizar_estado_peticion(id_peticion, nuevo_estado, correo_usuario)

        # Respuesta JSON indicando que el proceso fue exitoso
        return jsonify({"success": True, "message": "Estado actualizado y correo enviado."}), 200
    except Exception as e:
        print(f"Error al actualizar el estado: {e}")
        return jsonify({"success": False, "message": "Error al actualizar el estado"}), 500

# Ejecuta la aplicación Flask
if __name__ == '__main__':
    app.run(debug=True)