import sqlite3

try:
    con = sqlite3.connect("database/prueba")
    cur = con.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS vehiculo (marca VARCHAR(50), tipo VARCHAR(50))")
    cur.execute("CREATE TABLE IF NOT EXISTS usuario (username VARCHAR(50), id INTEGER)")
    con.commit()
    
except Exception as ex:
    print(ex)

finally:
    con.close()