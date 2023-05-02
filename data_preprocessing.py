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

# 更改 working directory
current_directory = os.getcwd()
data_directory = os.path.join(current_directory, 'data')
os.chdir(data_directory)
file_list = os.listdir()
python_files = [file for file in file_list if file.endswith('.py')]

# 執行所有在 data 下的 .py 檔案
for python_file in python_files:
    print("execute", python_file, "...")
    os.system(f'python {python_file}') # or python3


# 使用變量創建MySQL連接
cnx = mysql.connector.connect(user=db_username,
                              password=db_password,
                              host=db_hostname,
                              allow_local_infile=True)

cursor = cnx.cursor()
cursor.execute("SET GLOBAL local_infile = 1")

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

print("exicute reset_database SQL...")
executeScriptsFromFile('reset_database.sql')
print("exicute create_tables SQL...")
executeScriptsFromFile('create_tables.sql')
print("exicute load_data SQL...")
executeScriptsFromFile('load_data.sql')
cnx.commit()

os.chdir(current_directory)