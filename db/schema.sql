DROP DATABASE IF EXISTS emp_db;


CREATE DATABASE emp_db;


use emp_db;


DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;


CREATE TABLE departments (
    dpt_id INTEGER AUTO_INCREMENT PRIMARY KEY,

    dpt_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,

    dpt_id INTEGER,
    
        CONSTRAINT frnky_dpt
            FOREIGN KEY (dpt_id)
                REFERENCES departments(dpt_id)
        ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR (30) NOT NULL,

    role_id INTEGER,
         CONSTRAINT frnky_role
            FOREIGN KEY (role_id)
                REFERENCES roles(id)
        ON DELETE SET NULL,
   
    man_id INTEGER,
        CONSTRAINT frnky_man
            FOREIGN KEY (man_id)
                REFERENCES employee(id)
        ON DELETE SET NULL
);

source db/seeds.sql