create database app;
use app;

create table users (
  id int not null auto_increment,
  name varchar(255) not null,
  email varchar(255) not null,
  password varchar(255) not null,
  primary key (id)
);


INSERT INTO users
values (1,"brayan","brayanumbachisaba@gmail.com","123456");