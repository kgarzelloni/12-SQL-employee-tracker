drop database if exists employee_tracker_db;

create database employee_tracker_db;

use employee_tracker_db; 


create table department (
id int not null auto_increment primary key,
department_name varchar(30) not null 

);

create table role (
id int not null auto_increment primary key,
title varchar(30) not null,
salary decimal not null,
department_id int not null
);

create table employee (
    id int not null auto_increment primary key, 
    first_name  varchar(30) not null,
    last_name  varchar(30) not null,
    role_id int not null, 
    manager_id int
);

INSERT INTO department (department_name)
VALUES  ("Engineering"),
		("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 100000,1),
		("Salesperson", 100000,1),
        ("Lead Engineer",100000,2),
        ("Software Engineer",100000,2),
        ("Account Manager", 100000,3),
        ("Accountant", 100000,3),
        ("Legal Team Lead",100000,4),
        ("Lawer",100000,4);        
        

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe",1, null),
        ("Mike", "Chan",1, 1),
        ("Ashley", "Rodriquez",2, null),
        ("Kevin", "Tupik", 2, 2),
        ("Kunal", "Singh", 3, null),
        ("Malia", "Brown", 3, 3),
        ("Sarah", "Lourd", 4, null),
        ("Tom", "Allen", 4, 4);
        
        



		