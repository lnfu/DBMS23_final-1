# 資料庫系統概論 期末專案

## 匯入資料到 MySQL server

- 安裝好 MySQL server 在本機
- 至 [Open Powerlifting](http://old.openpowerlifting.org/data.html) 下載 [openpowerlifting.zip](http://old.openpowerlifting.org/static/openpowerlifting.zip) 檔案，並解壓縮到 ```/data/seeds``` 資料夾。
- 透過以下命令執行腳本 ```data_preprocessing.py```（可能需要花五到十分鐘左右的時間），執行前記得把 ```user_name``` 和 ```user_password``` 這兩個變數改成 MySQL server 的使用者名稱和密碼。


```
<<<<<<< HEAD
python3 -m venv venv # 建立 python 虛擬環境
venv/Scripts/activate # Windows。啟用虛擬環境
source venv/bin/activate # Mac。啟用虛擬環境
python3 -m pip install --upgrade pip # 更新 pip
pip install pandas mysql-connector-python # 安裝套件 pandas, mysql-connector-python
python3 data_preprocessing.py # 執行 data_preprocessing.py 處理原始資料並建立 MySQL table
=======
python -m venv venv
venv/Scripts/active
python -m pip install --upgrade pip
pip install pandas mysql-connector-python
python data_preprocessing.py
```

```
python3 -m venv venv
source venv/Scripts/active
python3 -m pip install --upgrade pip
pip install pandas mysql-connector-python
python3 data_preprocessing.py
>>>>>>> 189f3da90f26a932b0b8d1d0a0508896489cf48f
```

## Getting Started

```
yarn install
yarn run dev
```
