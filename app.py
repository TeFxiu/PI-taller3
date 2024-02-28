from flask import Flask, request, jsonify, redirect, url_for
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'db_clientespi'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'paraCoder'
app.config['MYSQL_DB'] = 'clientespi'
app.config['MYSQL_PORT'] = 3306

mysql = MySQL(app)

@app.route('/')
def inicio():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM clientes')
    datos = cur.fetchall()
    datos1 = []
    for dato in datos:
        datos1.append({"ID": dato[0], "Nombres": dato[1], "Apellidos": dato[2]})
    return jsonify(datos1)

@app.route('/', methods=['POST'])
def crear():
    dato_cliente = request.json
    nombre = dato_cliente['nombre']
    apellido = dato_cliente['apellido']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO clientes(Nombres, Apellidos) VALUES(%s, %s)", (nombre, apellido))
    mysql.connection.commit()
    return jsonify({"Mensaje": "Cliente registrado"})

@app.route('/cliente/<int:id>')
def buscar_cliente(id):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM clientes WHERE ID = {0}'.format(id))
    dato = cur.fetchall()
    return jsonify({"Cliente": dato})

@app.route('/cliente/<int:id>', methods=['PUT'])
def actualizar_cliente(id):
    cliente = buscar_cliente(id)
    dato_nuevo = request.json
    cliente.update(dato_nuevo)
    return redirect(url_for('http://localhost:3000/'))

@app.route('/cliente/<int:id>', methods=['DELETE'])
def borrar_cliente(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM clientes WHERE ID = {0}'.format(id))
    mysql.connection.commit()
    return jsonify({"Mensaje": "Cliente eliminado"})

if __name__ == '__main__':
    app.run(debug=True)