# deadlift 單項
import pandas as pd

file_path = "seeds/entries.csv"

dataframe = pd.read_csv(file_path)
dataframe.replace('\r', '', regex=True, inplace=True)

dataframe = dataframe[(dataframe['Event'] == 'SBD') | (dataframe['Event'] == 'D')]

keep_columns = [
    'MeetID',
    'LifterID',
    'Equipment',
    'Age',
    'BodyweightKg',
    'Deadlift1Kg',
    'Deadlift2Kg',
    'Deadlift3Kg',
    'Deadlift4Kg',
    'Tested'
]

dataframe = dataframe[keep_columns]

# print(dataframe)

new_file_path = "seeds/deadlift.csv"

dataframe.to_csv(new_file_path, index=False, lineterminator='\n')