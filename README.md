# 資料庫系統概論 期末專案

## 匯入資料到 MySQL server

- 安裝好 MySQL server 在本機
- 至 [Open Powerlifting](http://old.openpowerlifting.org/data.html) 下載 [openpowerlifting.zip](http://old.openpowerlifting.org/static/openpowerlifting.zip) 檔案，並解壓縮到 `/data/seeds` 資料夾。
- 新增 `.env.local` 檔案加入以下內容：

```
DB_HOST=<主機名或 IP address>
DB_USER=<使用者名稱>
DB_PASS=<使用者密碼>
```

- 透過以下命令執行腳本 `data_preprocessing.py`（可能需要花五到十分鐘左右的時間）。

```
python3 -m venv venv # 建立 python 虛擬環境
venv/Scripts/activate # Windows。啟用虛擬環境
source venv/bin/activate # Mac。啟用虛擬環境
python3 -m pip install --upgrade pip # 更新 pip
pip3 install -r requirements.txt # 安裝需要的套件
python3 data_preprocessing.py # 執行 data_preprocessing.py 處理原始資料並建立 MySQL table
```

## Getting Started

```
yarn install
yarn run dev
```

## Prettier

```
prettier --config ./.prettierrc --write .
```
