# 資料庫系統概論 期末專案

## 匯入資料到 MySQL server

- 先至 [Open Powerlifting](http://old.openpowerlifting.org/data.html) 下載 [openpowerlifting.zip](http://old.openpowerlifting.org/static/openpowerlifting.zip) 檔案，並解壓縮到 `/data/seeds` 資料夾。
- 透過以下命令執行腳本 `data_preprocessing.py`

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
