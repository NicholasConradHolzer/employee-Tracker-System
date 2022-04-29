DROP DATABASE IF EXISTS emp_db;


CREATE DATABASE emp_db;



DROP TABLE IF EXISTS departments;

CREATE TABLE department (
    dpt_name VARCHAR(30) NOT NULL

    dpt_id INTEGER AUTO_INCREMENT PRIMARY KEY,
);


DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    title VARCHAR(19) NOT NULL,

    salary DECIMAL(6,2) NOT NULL,

    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,

    dpt_id INTEGER,
            FOREIGN KEY (dpt_id)
                REFERENCES department(dpt_id)
        ON DELETE SET NULL
);


DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    last_name VARCHAR(30) NOT NULL,

    first_name VARCHAR (30) NOT NULL,

    id INTEGER AUTO_INCREMENT PRIMARY KEY,

    role_id INTEGER,
            FOREIGN KEY (role_id)
                REFERENCES roles(id)
        ON DELETE SET NULL,
        
    dpt_id INTEGER,
            FOREIGN KEY (dpt_id)
                REFERENCES department(dpt_id)
        ON DELETE SET NULL,
   
    man_id INTEGER,
            FOREIGN KEY (man_id)
                REFERENCES employee(id)
        ON DELETE SET NULL
);

source db/seeds.sql