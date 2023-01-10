CREATE DATABASE IF NOT EXISTS `sip_db`;

use sip_db;

CREATE TABLE users (
	user_id int NOT NULL AUTO_INCREMENT,
    username varchar(225) NOT NULL,
    password varchar(225) NOT NULL,
    reminder TINYINT NOT NULL DEFAULT 0,
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
    curr_date date NOT NULL,
    user_id int,
	last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (drinks_id),
    UNIQUE (user_id, curr_date),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE vouchers (
	voucher_id int NOT NULL AUTO_INCREMENT,
    brand varchar(225) NOT NULL,
    amount int NOT NULL,
    lifespan int NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (voucher_id)
);

CREATE TABLE points (
    points_id int NOT NULL AUTO_INCREMENT,
    points int NOT NULL CHECK(points > 0),
    user_id int,
    last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (points_id),
    UNIQUE (user_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE rewards (
	rewards_id int NOT NULL AUTO_INCREMENT,
    points_id int,
    voucher_id int,
    user_id int,
    last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (rewards_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (voucher_id) REFERENCES vouchers(voucher_id),
    FOREIGN KEY (points_id) REFERENCES points(points_id)
);

INSERT INTO `sip_db`.`vouchers` (`brand`, `amount`, `lifespan`) VALUES ('FairPrice', '5', '12');
INSERT INTO `sip_db`.`vouchers` (`brand`, `amount`, `lifespan`) VALUES ('FairPrice', '10', '12');
INSERT INTO `sip_db`.`vouchers` (`brand`, `amount`, `lifespan`) VALUES ('7-11', '5', '12');
INSERT INTO `sip_db`.`vouchers` (`brand`, `amount`, `lifespan`) VALUES ('7-11', '10', '12');