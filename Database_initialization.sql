CREATE DATABASE  AMMY_Pharmacy;
USE  AMMY_Pharmacy;

create table if not exists Customer
(
  Phone_Number BIGINT(100) NOT NULL,
  Customer_ID INT NOT NULL,
  Password VARCHAR(20) NOT NULL,
  First_Name VARCHAR(20) NOT NULL,
  Last_Name VARCHAR(20) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Age INT NOT NULL,
  PRIMARY KEY (Customer_ID),
  UNIQUE (Email,Phone_Number)
);

create table if not exists Customer_Address
(
  City VARCHAR(20) NOT NULL,
  Area VARCHAR(20) NOT NULL,
  Street_Name VARCHAR(20) NOT NULL,
  Building_Number VARCHAR(20) NOT NULL,
  Floor INT,
  House_Number INT NOT NULL,
  Customer_ID INT NOT NULL,
  PRIMARY KEY (Customer_ID,House_Number)
);

create table if not exists orders
(
  address VARCHAR(200) NOT NULL,
  Payment_Method VARCHAR(10) NOT NULL,
  visa Int,
  total float not null,
  Order_ID INT NOT NULL,
  Customer_ID INT NOT NULL,
  employee_ID INT NOT NULL,
  PRIMARY KEY (Order_ID,Customer_ID)
);

create table if not exists Ordered_Products
(
  Product_ID int not NULL,
  Order_ID int not NULL,
  PRIMARY KEY (Product_ID,Order_ID)
);
 


create table if not exists Visa
(
  Card_Number BIGINT(30) NOT NULL,
  EXP_date VARCHAR(10) NOT NULL,
  CVV INT NOT NULL,
  Customer_ID INT NOT NULL,
  Name_on_card VARCHAR(50),
  PRIMARY KEY (Card_Number,Customer_ID)
  );

create table if not exists Cart
(
  Product_ID int not NULL,
  Customer_ID INT NOT NULL,
  Quantity int not null,
  PRIMARY KEY (Customer_ID,Product_ID)
);

create table if not exists Product
(
  Product_ID int not NULL,
  product_Name VARCHAR(100) NOT NULL,
  Company VARCHAR(100) NOT NULL,
  Category VARCHAR(50) NOT NULL,
  Price float NOT NULL,
  Amount INT NOT NULL,
  Photo varchar(200) not null,
  Description Varchar(400)not null,
  PRIMARY KEY (Product_ID)
);

create table if not exists Ingredients
(
  Active_Ingredients VARCHAR(100) NOT NULL,
  Product_ID int not NULL,
  PRIMARY KEY (Product_ID,Active_Ingredients)
);


create table if not exists Employee
(
  Phone_number INT(20) NOT NULL,
  employee_ID INT NOT NULL,
  Salary float NOT NULL,
  Work_Email VARCHAR(100) NOT NULL,
  First_Name VARCHAR(20) NOT NULL,
  Last_Name VARCHAR(20) NOT NULL,
  Department VARCHAR(20) NOT NULL,
  unique(Phone_number,Work_Email),
  PRIMARY KEY (employee_ID)
  
);

create table if not exists APP_Admin
(
  Admin_Password VARCHAR(20) NOT NULL,
  employee_ID INT NOT NULL,
  PRIMARY KEY (employee_ID)
);

create table if not exists Pharmacist
(
  Job_registration_Number BIGINT(50) NOT NULL,
  employee_ID INT NOT NULL,
  PRIMARY KEY (employee_ID)
);

create table if not exists Delivery
(
  Orderes_Delivered INT NOT NULL,
  employee_ID INT NOT NULL,
  PRIMARY KEY (employee_ID)
);

create table if not exists Casher
(
  Casher_Password VARCHAR(20) NOT NULL,
  employee_ID INT NOT NULL,
  PRIMARY KEY (employee_ID)
);


ALTER TABLE Customer_Address 
ADD FOREIGN KEY(Customer_ID)
REFERENCES Customer(Customer_ID)
On delete  cascade
On update cascade;

ALTER TABLE Visa
ADD FOREIGN KEY(Customer_ID)
REFERENCES  Customer(Customer_ID)
On delete cascade
On update cascade;

ALTER TABLE orders 
ADD FOREIGN KEY(Customer_ID)
REFERENCES  Customer(Customer_ID)
On delete  cascade
On update cascade;

ALTER TABLE Ordered_Products 
ADD FOREIGN KEY(Order_ID)
REFERENCES  orders(Order_ID)
On delete  cascade
On update cascade;

ALTER TABLE Ordered_Products 
ADD FOREIGN KEY(Product_ID)
REFERENCES  Product(Product_ID)
On delete  cascade
On update cascade;



ALTER TABLE orders 
ADD FOREIGN KEY(employee_ID)
REFERENCES  Delivery(employee_ID)
On delete  cascade
On update cascade;

ALTER TABLE Cart
ADD FOREIGN KEY(Customer_ID)
REFERENCES Customer(Customer_ID)
On delete  cascade
On update cascade;

ALTER TABLE Cart
ADD FOREIGN KEY(Product_ID)
REFERENCES Product(Product_ID)
On delete  cascade
On update cascade;

ALTER TABLE Ingredients
ADD FOREIGN KEY(Product_ID)
REFERENCES Product(Product_ID)
On delete  cascade
On update cascade;

ALTER TABLE APP_Admin
ADD FOREIGN KEY(employee_ID)
REFERENCES Employee(employee_ID)
On delete  cascade
On update cascade;

ALTER TABLE Pharmacist
ADD FOREIGN KEY(employee_ID)
REFERENCES  Employee(employee_ID)
On delete  cascade
On update cascade;

ALTER TABLE Delivery
ADD FOREIGN KEY(employee_ID)
REFERENCES Employee(employee_ID)
On delete  cascade
On update cascade;

ALTER TABLE Casher 
ADD FOREIGN KEY(employee_ID)
REFERENCES Employee(employee_ID)
On delete  cascade
On update cascade;