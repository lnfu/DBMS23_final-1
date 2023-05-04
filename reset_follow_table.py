import os
import mysql.connector
from dotenv import load_dotenv

# 讀入環境變數
load_dotenv('.env.local')
db_username = os.getenv('DB_USER')
db_password = os.getenv('DB_PASS')
db_hostname = os.getenv('DB_HOST')
print('database hostname:', db_hostname)
print('database username:', db_username)
print('database password:', db_password)

cnx = mysql.connector.connect(user=db_username,
                              password=db_password,
                              host=db_hostname,
                              database='dbms23_final')

cursor = cnx.cursor()
cursor.execute("TRUNCATE TABLE Follow")
cnx.commit()