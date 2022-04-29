
INSERT INTO departments 
    (dpt_name)
VALUES
    ('Management'), /*1*/
    ('HR'), /*2*/
    ('Administration'), /*3*/
    ('Development'); /*4*/

INSERT INTO roles (title, salary, dpt_id)
VALUES
    ('Executive', 860000, 1), /*1*/
    ('Manager', 100000, 1), /*2*/

    ('Recruiter', 90000, 2), /*3*/

    ('Accounts-Recievable', 75000, 3), /*4*/

    ('Associate', 60000, 4), /*5*/
    ('Jr. Associate', 30000, 4), /*6*/
    ('Intern', 5200, 4); /*7*/

INSERT INTO employee (last_name, first_name, role_id, man_id)
VALUES
    /*C-Suite*/
    ('Bon Jovi', 'John', 1, NULL), /*1*/

    /*Management*/
    ('Osbourne', 'John', 2, 1), /*2*/


    /*Business Admin & Logistics/Human Resources*/
    ('Wylde', 'Zakk', 3, 2), /*4*/

    /*Product Development Team*/
    ('Vai', 'Steve', 5, 3), /*7*/


