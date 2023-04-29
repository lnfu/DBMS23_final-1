# 選手 ID, Name, Sex

import pandas as pd

file_path = "seeds/entries.csv"

dataframe = pd.read_csv(file_path)
dataframe.replace('\r', '', regex=True, inplace=True)

keep_columns = [
    'LifterID',
    'Name',
    'Sex'
]

dataframe = dataframe[keep_columns]
dataframe = dataframe.drop_duplicates(subset=['LifterID'])
dataframe = dataframe.sort_values(by='LifterID')


# print(dataframe)

new_file_path = "seeds/lifters.csv"

dataframe.to_csv(new_file_path, index=False, lineterminator='\n')