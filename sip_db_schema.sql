CREATE DATABASE IF NOT EXISTS `sip_db`;

use sip_db;

CREATE TABLE users (
	user_id int NOT NULL AUTO_INCREMENT,
    username varchar(225) NOT NULL,
    password varchar(225) NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id),
    UNIQUE (username)
);

CREATE TABLE goal (
	goal_id int NOT NULL AUTO_INCREMENT,
    goal int NOT NULL,
    user_id int,
    last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (goal_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE drinks (
	drinks_id int NOT NULL AUTO_INCREMENT,
    drinks int NOT NULL,
    curr_date int NOT NULL,
    user_id int,
	last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (drinks_id),
    UNIQUE (user_id, curr_date),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);