INSERT INTO department (name)
VALUES ("Engineering"),
        ("Sales"),
        ("Legal"),
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead", 1000000, 1),
("Salesperson", 80000, 2),
("Lead Engineer", 150000, 3),
("Software Engineer", 120000, 4),
("Account Manager", 160000, 5),
("Accountant", 125000, 6),
("Legal Team Lead", 250000, 7),
("Lawyer", 190000, 8);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
(John, Doe, 1),
(Mike, Chan, ),
(Ashely, Rodriguez, 1),
("Kevin", Tupik, 1),
(John, Doe, 1),
(John, Doe, 1),
(John, Doe, 1),
