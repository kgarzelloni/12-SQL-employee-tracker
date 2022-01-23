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




		