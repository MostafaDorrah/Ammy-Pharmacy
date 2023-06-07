#Customers
INSERT INTO `ammy_pharmacy`.`customer` (`Phone_Number`, `Customer_ID`, `Password`, `First_Name`, `Last_Name`, `Email`, `Age`)
VALUES ('1066906533', '101', 'Cu@101', 'Mostafa', 'Dorrah', 'mo@gmail', '20');
INSERT INTO `ammy_pharmacy`.`customer` (`Phone_Number`, `Customer_ID`, `Password`, `First_Name`, `Last_Name`, `Email`, `Age`)
VALUES ('1025334642', '102', 'Cu@102', 'Marwan', 'Dorrah', 'ma@gmail', '17');
INSERT INTO `ammy_pharmacy`.`customer` (`Phone_Number`, `Customer_ID`, `Password`, `First_Name`, `Last_Name`, `Email`, `Age`)
VALUES ('1066534534', '103', 'Cu@103', 'Yousef', 'Adel', 'yo@gmail', '20');

#Employee
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01004324522', '101', '12000', 'a_mos@ammyl.com', 'Mostafa', 'Dorrah', 'A');
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01003452213', '102', '10000', 'a_mohamed@ammy.com', 'Mohamed', 'Ahmed', 'A');
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01234575432', '103', '5000', 'd_ayman@ammy.com', 'ayman', 'fouad', 'D');
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01235654348', '104', '6000', 'd_osama@ammy.com', 'osama', 'mohamed', 'D');
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01134567543', '105', '7000', 'd_marwan@ammy.com', 'marwan', 'ahmed', 'C');
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01123476534', '106', '8000', 'd_zayad@ammy.com', 'zayad', 'nour', 'C');
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01134567543', '107', '15000', 'p_mazen@ammy.com', 'mazen', 'ahmed', 'P');
INSERT INTO `ammy_pharmacy`.`employee` (`Phone_number`, `employee_ID`, `Salary`, `Work_Email`, `First_Name`, `Last_Name`, `Department`) 
VALUES ('01007654376', '108', '20000', 'p_ahmed', 'ahmed', 'salem', 'P');

#APPAdmin

INSERT INTO `ammy_pharmacy`.`app_admin` (`Admin_Password`, `employee_ID`) 
VALUES ('Mo@101', '101');
INSERT INTO `ammy_pharmacy`.`app_admin` (`Admin_Password`, `employee_ID`) 
VALUES ('Mo@102', '102');

#casher
INSERT INTO `ammy_pharmacy`.`casher` (`Casher_Password`, `employee_ID`) 
VALUES ('Ma@105', '105');
INSERT INTO `ammy_pharmacy`.`casher` (`Casher_Password`, `employee_ID`) 
VALUES ('Za@106', '106');

#Delivery
INSERT INTO `ammy_pharmacy`.`delivery` (`Orderes_Delivered`, `employee_ID`) 
VALUES ('1', '103');
INSERT INTO `ammy_pharmacy`.`delivery` (`Orderes_Delivered`, `employee_ID`) 
VALUES ('1', '104');

#Pharmacist
INSERT INTO `ammy_pharmacy`.`pharmacist` (`Job_registration_Number`, `employee_ID`) 
VALUES ('1230986349', '107');
INSERT INTO `ammy_pharmacy`.`pharmacist` (`Job_registration_Number`, `employee_ID`) 
VALUES ('3938864958', '108');

#Addresses
INSERT INTO `ammy_pharmacy`.`customer_address` (`City`, `Area`, `Street_Name`, `Building_Number`, `Floor`, `House_Number`, `Customer_ID`) 
VALUES ('Alexandria', 'zayed', 'sirhank', '23', '11', '41', '101');

INSERT INTO `ammy_pharmacy`.`customer_address` (`City`, `Area`, `Street_Name`, `Building_Number`, `Floor`, `House_Number`, `Customer_ID`) 
VALUES ('Alexandria', 'loran', 'sirhank', '22', '12', '50', '101');

#Visa
INSERT INTO `ammy_pharmacy`.`visa` (`Card_Number`, `EXP_date`, `CVV`, `Customer_ID`, `Name_on_card`) 
VALUES ('1234567891234567', '12/24', '123', '101', 'mostafa');
INSERT INTO `ammy_pharmacy`.`visa` (`Card_Number`, `EXP_date`, `CVV`, `Customer_ID`)
VALUES ('9876543211234567', '11/25', '987', '101');


#orders
INSERT INTO `ammy_pharmacy`.`orders` (`address`, `Payment_Method`, `visa`, `total`, `Order_ID`, `Customer_ID`,`employee_ID`) 
VALUES ('Alexandria,zayed,sirhank,23,11,41', 'Visa', '1234', '120.5', '101', '101','103');

INSERT INTO `ammy_pharmacy`.`orders` (`address`,`Payment_Method`,`total`,`Order_ID`,`Customer_ID`,`employee_ID`) 
VALUES ('Alexandria,loran,sirhank,23,11,50','cash','1000.5', '102', '101','104');


#Products
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`,`Category`, `Price`, `Amount`, `Photo`,`Description`)
VALUES ('101', 'PANADOL COLD & FLU', 'Panadol','Anti-cold', '85.0', '10', 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reborn/en_ME/product-detail/380x463-new/Panadol-Vapour-Release-380x463.png.rendition.380.463.png?auto=format','Inhalation: The contents of the sachet are added to a cup of very hot water and the steam is inhaled.
Panadol sachets are taken from the age of 12 and over at a rate of one sachet every 4-6 hours, if necessary. 
Do not take more than 6 sachets of Panadol in 24 hours.
Do not use if pregnant');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`,`Category`, `Price`, `Amount`, `Photo`,`Description`)
VALUES ('102', 'CETAL 500 MG', 'EIPICO','Non-narcotic analgesics','8.0', '15', 'http://egyptiandrugstore.com/image/cache/data/manar13/CETAL%20TAB-400x400.png','Adults, Elderly and Children 16 years or Older: 500 mg-1 g (1 – 2 tablets) (10 ml-20 ml) every 3 hours when necessary to a maximum of 8 doses in 24 hours. 
Before using paracetamol,tell your doctor if you have liver disease or a history of alcoholism.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`,`Company`,`Category`, `Price`, `Amount`, `Photo`,`Description`)
VALUES ('103', 'FLUTRESIBA FLEXTOUCH PREFILLED PEN 3 ML', 'Novo Nordisk','Diabetes', '270.0', '7', 'http://egyptiandrugstore.com/image/cache/data/manar9/tresiba2-500x500.png','This injection is to be taken under the skin of the thigh or upper arm or abdomen.Do not take this injection in vein or in muscles.Pull a skin, fold up to take this injection. 
one time use only according to the doctor instructions');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('104', 'MASCO Insulin Syringe 100 Micro', 'Masko Med', 'Diabetes', '2', '50', 'https://seif-online.com/wp-content/uploads/2020/08/388960--768x576.jpg', 'The thickness of the syringe is thin, size 30, to ensure that no pain is felt.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('105', 'INSULINAGYPT – 70/30 – 100 IU/ML 1 VIAL 10 ML', 'MUP', 'Diabetes', '48', '20', 'https://habibpharmacy.com/wp-content/uploads/2021/03/insulinagypt.jpg', 'ISOPHANE INSULIN 70% + REGULAR (SOLUBLE) INSULIN (R-DNA) 30% - (FOR S.C. INJECTION)');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('106', 'OROWHITE MOUTH WASH FRESH 300ML STRAWBERRY', 'Orowhite', 'Mouthwash', '40', '60', 'https://seif-online.com/wp-content/uploads/2021/04/389342-768x768.jpg', 'deliver a  powerful antiseptic formula help to reduce plaque causes gingivitis.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('107', 'NEO-MINOPHYLLINE SYRUP 120 ML', 'Alexandria Co. for Pharmaceuticals', 'RESPIRATORY', '8', '20', 'https://seif-online.com/wp-content/uploads/2020/05/39-.jpg', 'Children 6-9 years: one and half teaspoonful 3-4 times daily after meals.Children up to 16 years: one and half to two teaspoonful 3-4 times daily after meals.Over 16 years: 2-3 teaspoonful 3-4 times daily after meals.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('108', 'CONGESTAL SYRUP 120 ML', 'SIGMA', 'Anti-cold', '10', '100', 'https://seif-online.com/wp-content/uploads/2020/01/54090--768x762.jpg', 'Usage: Cold and Cough,For common cold and influenza,Cough suppressant,Antipyretic.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('109', 'ONETWOTHREE (COLD – FLU) SYRUP 120 ML', 'hikma', 'Anti-cold', '14', '30', 'https://seif-online.com/wp-content/uploads/2020/01/135841.jpg', 'Dosage:4-11 months: ½ teaspoonful (2.5mL) 3-4 times daily,1-3 years: ¾ – 1 teaspoonful (3-5mL) 3-4 times daily,4-8 years: 1 ½ – 2 teaspoonful (7.5-10mL) 3-4 times daily,9-11 years: 2-3 teaspoonful (10-15 mL) 3-4 times daily.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) VALUES ('110', 'POWER COLD & FLU 20 TAB', 'Chemipharm', 'Anti-cold', '18', '79', 'https://seif-online.com/wp-content/uploads/2020/01/221461-500x500-1-768x768.jpg', 'Dosage: For adults and children aged 12 and over: 1 – 2 tablets 3 times daily.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`)
VALUES ('111', 'CODILAR SYRUP 120 ML', 'The Nile Co.', 'Anti-cold', '11', '25', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdSN4r1ppGSgx_8c9pgo5rCeSb3D2GYFwBOS-2ojxaIG5g29htwy2Y9PquPjB1-O5lDk&usqp=CAU', 'Not to be used for children under 6 years of age.Use under medical prescription only.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('112', 'DOLO - D SUSP 115 ML', 'BORG PHARMACEUTICAL', 'Anti-cold', '16', '80', 'https://habibpharmacy.com/wp-content/uploads/2021/02/Dolo-D.jpg', 'Shake well before use.Children (6-11 years): 2 teaspoonful (10 ml).Not to be used for children less than 6 years old.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('113', 'INVOKANA 300 MG 30 TAB', 'jassen', 'Diabetes', '505', '10', 'https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/janssen_invokana_300mg_tab_caja.png', 'Invokana is indicated in adults aged 18 years and older with type 2 diabetes mellitus to improve glycaemic control.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('114', 'NOVOMIX 30 FLEXPEN 100 U /ML 5 PEN 3 ML', 'NOVOMIX', 'Diabetes', '637', '19', 'https://www.indlaegssedler.dk/resource/pakningsfoto/6024?width=800', 'Keep out of the reach and sight of children.Read the package leaflet before use.Resuspend according to instructions.NovoMix® 30 FlexPen® is for use by one person only.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('115', 'CORTILON 0.1 MG 20 TAB', 'Normotensive', 'Blood-Pressure', '8', '22', 'https://images.yaoota.com/8v-ycwlWZkT4ZnYwqdiMIgYENqQ=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production/media/crawledproductimages/2a22592fbd66d178de9ff64bb909d6448a0d7af4.jpg', 'CORTILON& 0.1 MG& 20 TAB');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('116', 'CORASORE 150 MG 20 TAB', 'AMOUN', 'Blood-Pressure', '16', '50', 'http://egyptiandrugstore.com/image/cache/data/MANAR%2014/CORASORE%20TAB-400x400.png', 'For Hypotension.Dose for adults: One tablet from 2-6 times / day or as prescribed by the physician.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('117', 'CORASORE 150 MG / ML ORAL DROPS 15 ML', 'AMOUN', 'Blood-Pressure', '12', '40', 'http://egyptiandrugstore.com/image/cache/data/MANAR%2014/CORASORE-400x400.png', 'For Hypotension.Dose for adults: 25 drops from 2-6 times / day or as prescribed by the physician.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('118', 'VASCON 5 MG 20 TAB', 'HI PHARM', 'Blood-Pressure', '17', '99', 'https://seif-online.com/wp-content/uploads/2020/01/35825-768x649.jpg', 'Circulatory analeptic.');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('119', 'HARTIFRIN 7.5 MG / ML ORAL DROPS 15 ML', 'HARTIFRIN ', 'Blood-Pressure', '9', '7', 'https://images.yaoota.com/HY5hcma1FnHr4qusF7g0GdSZZyk=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production/media/crawledproductimages/f814fe5c4b717c2c8578947f9745f0eae63872ee.jpg', 'ETILEFRINE HYDROCHLORIDE 7.5 MG / ML');
INSERT INTO `ammy_pharmacy`.`product` (`Product_ID`, `product_Name`, `Company`, `Category`, `Price`, `Amount`, `Photo`, `Description`) 
VALUES ('120', 'COVERSYL PLUS 5 / 1.25 MG 15 TAB', 'SERVIER', 'Blood-Pressure', '47', '50', 'https://drmint.care/wp-content/uploads/2020/08/COVERSYL-PLUS-5MG-1.25MG-15TAB-1.jpg', 'Store at temperature not exceeding 30 degrees C in a dry place.Keep the container tightly closed in order to protect from moisture');

#Ing
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Insulin', 103);
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Paracetamol', '102');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Paracetamol', '101');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Insulin', '105');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('THEOPHYLLINE ANHYDROUS', '107');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('GUAIPHENESIN', '107');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Paracetamol', '108');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Chlorpheniramine', '108');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Pseudoephedrine', '108');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Paracetamol', '109');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Pseudoephedrine', '109');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Chlorpheniramine', '109');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Paracetamol', '110');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Pseudoephedrine', '110');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Caffeine', '110');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Chlorpheniramine', '110');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Dextromethorphan', '111');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Phenylephrine', '111');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES (' Chlorpheniramine ', '111');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Ibuprofen', '112');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('Pseudoephedrine', '112');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('CANAGLIFLOZIN', '113');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('INSULIN', '114');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('FLUDROCORTISONE', '115');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('HEPTAMINOL', '116');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('HEPTAMINOL', '117');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('ETILEFRINE', '118');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('ETILEFRINE', '119');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('PERINDOPRIL', '120');
INSERT INTO `ammy_pharmacy`.`ingredients` (`Active_Ingredients`, `Product_ID`) 
VALUES ('INDAPAMIDE', '120');
#cart
INSERT INTO `ammy_pharmacy`.`cart` (`Product_ID`, `Customer_ID`, `Quantity`)
VALUES ('101', '101', '2');
INSERT INTO `ammy_pharmacy`.`cart` (`Product_ID`, `Customer_ID`, `Quantity`)
VALUES ('102', '101', '1');







