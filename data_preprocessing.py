import os
import mysql.connector

user_name = 'root'
user_password = 'root'

current_directory = os.getcwd()
data_directory = os.path.join(current_directory, 'data')
os.chdir(data_directory)
file_list = os.listdir()
python_files = [file for file in file_list if file.endswith('.py')]

# 執行所有檔案
for python_file in python_files:
    print("execute", python_file, "...")
    os.system(f'python {python_file}') # or python3

db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')

# 使用變量創建MySQL連接
cnx = mysql.connector.connect(user=db_user,
                              password=db_password,
                              host=db_host)
print("exicute SQL...")

cursor =cnx.cursor()

def executeScriptsFromFile(filename):
    fd = open(filename, 'r')
    sqlFile = fd.read()
    fd.close()
    sqlCommands = sqlFile.split(';')

    for command in sqlCommands:
        try:
            if command.strip() != '':
                cursor.execute(command)
        except (IOError, msg):
            print ("Command skipped: ", msg)

executeScriptsFromFile('create_tables.sql')
cnx.commit()

os.chdir(current_directory)