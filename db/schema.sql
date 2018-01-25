create database burgers_db
use burgers_db

create table burgers 
(
    id integer not null auto_increment, 
    burger_name varchar (255) not null, 
    devoured boolean DEFAULT false, 
    primary key (id)
);

/*
mysql -u root -p --port 8889 -h 127.0.0.1 < schema.sql
*/