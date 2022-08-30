CREATE TABLE User (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE
);

SELECT * FROM User;

CREATE TABLE Task (
TaskId VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
limitDate DATE NOT NULL,
creatorUserId VARCHAR(255),
FOREIGN KEY (creatorUserId) REFERENCES User(id)
);

SELECT * FROM Task;

ALTER TABLE Task CHANGE TaskId taskId VARCHAR(255);

SELECT taskId, title, description, limitDate, creatorUserId, nickname
FROM User
JOIN Task
ON Task.creatorUserId = User.id

