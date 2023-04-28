# bench 單項
import pandas as pd

file_path = "seeds/entries.csv"

dataframe = pd.read_csv(file_path)

dataframe = dataframe[(dataframe['Event'] == 'SBD') | (dataframe['Event'] == 'B')]

keep_columns = [
    'MeetID',
    'LifterID',
    'Equipment',
    'Age',
    'BodyweightKg',
    'Bench1Kg',
    'Bench2Kg',
    'Bench3Kg',
    'Bench4Kg',
    'Tested'
]

dataframe = dataframe[keep_columns]

# print(dataframe)

new_file_path = "seeds/bench.csv"

dataframe.to_csv(new_file_path, index=False)