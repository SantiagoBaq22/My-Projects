import sqlite3

# Crear/conectar a la base de datos
conn = sqlite3.connect('RestaurAccion.db')
cursor = conn.cursor()

# Crear tabla Usuarios
cursor.execute('''
    CREATE TABLE IF NOT EXISTS Usuarios (
        Usuario TEXT PRIMARY KEY,
        Email TEXT NOT NULL,
        Contraseña TEXT NOT NULL,
        Telefono TEXT
    )
''')

# Crear tabla Estados
cursor.execute('''
    CREATE TABLE IF NOT EXISTS Estados (
        Estado TEXT PRIMARY KEY
    )
''')

# Crear tabla Reportes
cursor.execute('''
    CREATE TABLE IF NOT EXISTS Reportes (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Usuario TEXT NOT NULL,
        Ciudad TEXT NOT NULL,
        Departamento TEXT NOT NULL,
        Problema TEXT NOT NULL,
        Entidad TEXT,
        Estado TEXT NOT NULL,
        FOREIGN KEY (Usuario) REFERENCES Usuarios(Usuario),
        FOREIGN KEY (Estado) REFERENCES Estados(Estado)
    )
''')

# Guardar cambios y cerrar la conexión
conn.commit()
conn.close()

print("Base de datos 'RestaurAccion.db' creada con éxito.")