# 資料庫系統概論 期末專案

## 匯入資料到 MySQL server

- 安裝好 MySQL server 在本機
- 至 [Open Powerlifting](http://old.openpowerlifting.org/data.html) 下載 [openpowerlifting.zip](http://old.openpowerlifting.org/static/openpowerlifting.zip) 檔案，並解壓縮到 ```/data/seeds``` 資料夾。
- 透過以下命令執行腳本 ```data_preprocessing.py```（可能需要話五到十分鐘左右的時間），執行前記得把 ```user_name``` 和 ```user_password``` 這兩個變數改成 MySQL server 的使用者名稱和密碼。


```
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
```

## Getting Started

```
yarn install
yarn run dev
```
