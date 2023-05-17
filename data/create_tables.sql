USE dbms23_final;

-- lift data
CREATE TABLE Lifters (
  LifterID INT,
  Name VARCHAR(255),
  Sex VARCHAR(2),
  PRIMARY KEY (LifterID)
);
CREATE TABLE Meets (
  MeetID INT,
  MeetPath VARCHAR(255),
  Federation VARCHAR(255),
  Date DATE,
  MeetCountry VARCHAR(255),
  MeetState VARCHAR(255),
  MeetTown VARCHAR(255),
  MeetName VARCHAR(255),
  PRIMARY KEY (MeetID)
);
CREATE TABLE TotalData (
  MeetID INT NOT NULL,
  LifterID INT NOT NULL,
  Equipment VARCHAR(20),
  Age DECIMAL(3,1),
  BodyweightKg DECIMAL(5,2),
  Best3SquatKg DECIMAL(5,2) NOT NULL,
  Best3BenchKg DECIMAL(5,2) NOT NULL,
  Best3DeadliftKg DECIMAL(5,2) NOT NULL,
  TotalKg DECIMAL(6,2) NOT NULL,
  Place VARCHAR(2),
  Wilks FLOAT,
  McCulloch FLOAT,
  Tested BOOLEAN,
  PRIMARY KEY (MeetID, LifterID),
  FOREIGN KEY (MeetID)
    REFERENCES Meets(MeetID)
    ON DELETE CASCADE,
  FOREIGN KEY (LifterID)
    REFERENCES Lifters(LifterID)
    ON DELETE CASCADE
);
CREATE TABLE SquatData (
  MeetID INT NOT NULL,
  LifterID INT NOT NULL,
  Equipment VARCHAR(20),
  Age DECIMAL(3,1),
  BodyweightKg DECIMAL(5,2),
  Squat1Kg DECIMAL(5,2),
  Squat2Kg DECIMAL(5,2),
  Squat3Kg DECIMAL(5,2),
  Squat4Kg DECIMAL(5,2),
  Tested BOOLEAN,
  PRIMARY KEY (MeetID, LifterID),
  FOREIGN KEY (MeetID)
    REFERENCES Meets(MeetID)
    ON DELETE CASCADE,
  FOREIGN KEY (LifterID)
    REFERENCES Lifters(LifterID)
    ON DELETE CASCADE
);
CREATE TABLE BenchData (
  MeetID INT NOT NULL,
  LifterID INT NOT NULL,
  Equipment VARCHAR(20),
  Age DECIMAL(3,1),
  BodyweightKg DECIMAL(5,2),
  Bench1Kg DECIMAL(5,2),
  Bench2Kg DECIMAL(5,2),
  Bench3Kg DECIMAL(5,2),
  Bench4Kg DECIMAL(5,2),
  Tested BOOLEAN,
  PRIMARY KEY (MeetID, LifterID),
  FOREIGN KEY (MeetID)
    REFERENCES Meets(MeetID)
    ON DELETE CASCADE,
  FOREIGN KEY (LifterID)
    REFERENCES Lifters(LifterID)
    ON DELETE CASCADE
);
CREATE TABLE DeadliftData (
  MeetID INT NOT NULL,
  LifterID INT NOT NULL,
  Equipment VARCHAR(20),
  Age DECIMAL(3,1),
  BodyweightKg DECIMAL(5,2),
  Deadlift1Kg DECIMAL(5,2),
  Deadlift2Kg DECIMAL(5,2),
  Deadlift3Kg DECIMAL(5,2),
  Deadlift4Kg DECIMAL(5,2),
  Tested BOOLEAN,
  PRIMARY KEY (MeetID, LifterID),
  FOREIGN KEY (MeetID)
    REFERENCES Meets(MeetID)
    ON DELETE CASCADE,
  FOREIGN KEY (LifterID)
    REFERENCES Lifters(LifterID)
    ON DELETE CASCADE
);
-- user data
CREATE TABLE Follow (
  UserID INT NOT NULL, -- github ID
  LifterID INT NOT NULL,
  Foreign Key (LifterID) REFERENCES Lifters(LifterID) ON DELETE CASCADE,
  -- UNIQUE INDEX idx_unique_follow (UserID, LifterID)
);

CREATE INDEX idx_user_id ON Follow (UserID);