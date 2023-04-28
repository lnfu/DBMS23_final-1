# squat 單項
import pandas as pd

file_path = "seeds/entries.csv"

dataframe = pd.read_csv(file_path)

dataframe = dataframe[(dataframe['Event'] == 'SBD') | (dataframe['Event'] == 'S')]

keep_columns = [
    'MeetID',
    'LifterID',
    'Equipment',
    'Age',
    'BodyweightKg',
    'Squat1Kg',
    'Squat2Kg',
    'Squat3Kg',
    'Squat4Kg',
    'Tested'
]

dataframe = dataframe[keep_columns]

# print(dataframe)

new_file_path = "seeds/squat.csv"

dataframe.to_csv(new_file_path, index=False)