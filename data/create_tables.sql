DROP DATABASE IF EXISTS dbms23_final;
CREATE DATABASE dbms23_final;
USE dbms23_final;

CREATE TABLE TotalData (
  MeetID MEDIUMINT NOT NULL,
  LifterID MEDIUMINT NOT NULL,
  Equipment ENUM('Raw', 'Wraps', 'Single-ply', 'Multi-ply', 'Unlimited', 'Straps'),
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
  PRIMARY KEY (MeetID, LifterID)
);

CREATE TABLE Lifters (
  LifterID MEDIUMINT,
  Name VARCHAR(255),
  Sex ENUM('M', 'F', 'Mx'),
  PRIMARY KEY (LifterID)
);

CREATE TABLE Meet (
  MeetID MEDIUMINT,
  MeetPath VARCHAR(255),
  Federation VARCHAR(255),
  Date DATE,
  MeetCountry VARCHAR(255),
  MeetState VARCHAR(255),
  MeetTown VARCHAR(255),
  MeetName VARCHAR(255),
  PRIMARY KEY (MeetID)
);

CREATE TABLE SquatData (
  MeetID MEDIUMINT NOT NULL,
  LifterID MEDIUMINT NOT NULL,
  Equipment ENUM('Raw', 'Wraps', 'Single-ply', 'Multi-ply', 'Unlimited', 'Straps'),
  Age DECIMAL(3,1),
  BodyweightKg DECIMAL(5,2),
  Squat1Kg DECIMAL(5,2) NOT NULL,
  Squat2Kg DECIMAL(5,2) NOT NULL,
  Squat3Kg DECIMAL(5,2) NOT NULL,
  Squat4Kg DECIMAL(5,2) NOT NULL,
  Tested BOOLEAN,
  PRIMARY KEY (MeetID, LifterID)
);
CREATE TABLE BenchData (
  MeetID MEDIUMINT NOT NULL,
  LifterID MEDIUMINT NOT NULL,
  Equipment ENUM('Raw', 'Wraps', 'Single-ply', 'Multi-ply', 'Unlimited', 'Straps'),
  Age DECIMAL(3,1),
  BodyweightKg DECIMAL(5,2),
  Bench1Kg DECIMAL(5,2) NOT NULL,
  Bench2Kg DECIMAL(5,2) NOT NULL,
  Bench3Kg DECIMAL(5,2) NOT NULL,
  Bench4Kg DECIMAL(5,2) NOT NULL,
  Tested BOOLEAN,
  PRIMARY KEY (MeetID, LifterID)
);
CREATE TABLE DeadliftData (
  MeetID MEDIUMINT NOT NULL,
  LifterID MEDIUMINT NOT NULL,
  Equipment ENUM('Raw', 'Wraps', 'Single-ply', 'Multi-ply', 'Unlimited', 'Straps'),
  Age DECIMAL(3,1),
  BodyweightKg DECIMAL(5,2),
  Deadlift1Kg DECIMAL(5,2) NOT NULL,
  Deadlift2Kg DECIMAL(5,2) NOT NULL,
  Deadlift3Kg DECIMAL(5,2) NOT NULL,
  Deadlift4Kg DECIMAL(5,2) NOT NULL,
  Tested BOOLEAN,
  PRIMARY KEY (MeetID, LifterID)
);


