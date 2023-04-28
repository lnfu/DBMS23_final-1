# 只保留三項總合(三次最佳)
# 若只有比 SBD 部分就刪除
# 即使是比 SBD 但是紀錄三項沒有全部也刪除

import pandas as pd

file_path = "seeds/entries.csv"

dataframe = pd.read_csv(file_path)

dataframe = dataframe[dataframe['Event'] == 'SBD']
dataframe = dataframe.dropna(subset=['Best3SquatKg', 'Best3BenchKg', 'Best3DeadliftKg'])

keep_columns = [
    'MeetID',
    'LifterID',
    'Equipment',
    'Age',
    'BodyweightKg',
    'Best3SquatKg',
    'Best3BenchKg',
    'Best3DeadliftKg',
    'TotalKg',
    'Place',
    'Wilks',
    'McCulloch', 
    'Tested'
]

dataframe = dataframe[keep_columns]

# print(dataframe)

new_file_path = "seeds/total.csv"

dataframe.to_csv(new_file_path, index=False)