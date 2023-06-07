import mysql.connector
from fastapi import FastAPI
import smtplib
from fastapi import Request, FastAPI
import json

USERNAME="root"
PASSWORD="root"

#connecting to the Database
mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

app = FastAPI()


def Email_Sender(to_address,Subject,Message):
    smtp_object = smtplib.SMTP('smtp.gmail.com',587)
    smtp_object.ehlo()
    smtp_object.starttls()
    Email = "ammypharmacy@gmail.com"
    Password = "cabcwjqryyxkpkqf"
    smtp_object.login(Email,Password)
    msg = "Subject: " + Subject + '\n' + Message
    smtp_object.sendmail(Email,to_address,msg)
    print("Done")

def Password_checker(password):
    key = True
    Special=['_','*','$', '@', '#', '%']
      
    if len(password) < 8:
        key = False
         
    elif not any(i.isdigit() for i in password):
        key = False
          
    elif not any(i.isupper() for i in password):
        key = False
        
    elif not any(i in Special for i in password):
        key = False
    
    return key

app = FastAPI()


class Customer():


    @app.get("/View_Customer/{Customer_ID}")
    def View_Customer(Customer_ID: int):
        mydb = mysql.connector.connect(
            host="localhost", user=USERNAME, password=PASSWORD, database="ammy_pharmacy")

        executer = mydb.cursor()

        query = "SELECT First_Name,Last_Name,Email,Password,Phone_Number FROM Customer where Customer_ID= '{}';".format(
            Customer_ID)
        executer.execute(query)
        info = executer.fetchall()
        mydb.commit()
        value = {"First_Name": info[0][0], "Last_Name": info[0][1],
                 "Email": info[0][2], "Password": info[0][3], "Phone_Number": info[0][4]}
        mydb.close()
        return value


    @app.post("/Customer_signup")
    async def Customer_signup(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()
        if "@" not in Value["Email"]:
            mydb.close()
            return {"Value": "False_Email"}
            
        else:
            if not Password_checker(Value["Password"]):
                mydb.close()
                return {"Value": "False_Password"}
            else: 
                try:

                    query_1="SELECT Customer_ID FROM customer ORDER BY Customer_ID DESC LIMIT 1;"
                    executer.execute(query_1)
                    Last_id=executer.fetchall()
                    Customer_ID= Last_id[0][0]+1
                
                    query_2 = "INSERT INTO customer (Phone_Number,Customer_ID,Password,First_Name,Last_Name,Email,Age) VALUES (%s,%s,%s,%s,%s,%s,%s)"
                    values= (Value["Phone_Number"],Customer_ID,Value["Password"],Value["First_Name"],Value["Last_Name"],Value["Email"],Value["Age"])
                    executer.execute(query_2, values)
                    mydb.commit()
                    mydb.close()
                    #Sub="Welcome to AMMY Pharmacy!!"
                    #body="""Your ID is {}. \n Your Email is {}. \n Your Password is {}.""".format(Customer_ID,Value["Email"],Value["Password"])
                    #Email_Sender(Value["Email"],Sub,body)
                    return {"Value": "True","ID":Customer_ID}
                except mysql.connector.Error as err:
                    mydb.close()
                    return {"Value": "False_Duplicate"}

    @app.post("/Customer_login")
    async def Customer_login(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()

        query = "SELECT * FROM customer WHERE Email = '{}';".format(Value["Email"])
        executer.execute(query)
        result = executer.fetchall()
        if len(result)==0:
            mydb.close()
            return {"Value": "False"}
        else:
            if(result[0][5]==Value["Email"])& (result[0][2]==Value["Password"]):
                mydb.close()
                return {"Value": "True","ID":result[0][1]}
            else:
                mydb.close()
                return {"Value": "False"}
               
    @app.post("/Customer_delete/{ID}")
    def Customer_delete(ID: int):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        executer = mydb.cursor()

        query = "DELETE FROM customer WHERE Customer_ID= '{}';".format(ID)
        executer.execute(query)
        mydb.commit()
        mydb.close()

    @app.post("/Customer_update/{ID}")
    async def update_profile_info(ID: int,request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()

        if len(Value["Phone_Number"]) !=0:
            query = "UPDATE Customer SET Phone_number = '{}' WHERE Customer_ID = '{}';".format(Value["Phone_Number"],ID)
            executer.execute(query)
            mydb.commit()

        if len(Value["Password"]) !=0 :
            query = "UPDATE Customer SET Password = '{}' WHERE Customer_ID = '{}';".format(Value["Password"],ID)
            executer.execute(query)
            mydb.commit()
   
        if len(Value["First_Name"]) !=0:
            query = "UPDATE Customer SET First_Name = '{}' WHERE Customer_ID = '{}';".format(Value["First_Name"],ID)
            executer.execute(query)
            mydb.commit()
        
        if len(Value["Last_Name"]) !=0:
            query = "UPDATE Customer SET Last_Name = '{}' WHERE Customer_ID = '{}';".format(Value["Last_Name"],ID)
            executer.execute(query)
            mydb.commit()
            
        if len(Value["Email"] )!= 0 and "@" in Value["Email"] :
            query = "UPDATE Customer SET Email = '{}' WHERE Customer_ID = '{}';".format(Value["Email"] ,ID)
            executer.execute(query)
            mydb.commit()
        
        mydb.close()


    @app.post("/Customer_add_address")
    async def add_address(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()

        query = "INSERT INTO Customer_Address (city, area, street_name, building_number, floor, house_number, Customer_ID) VALUES (%s,%s,%s,%s,%s,%s,%s)"
        values = (Value["city"],Value["area"], Value["street"], Value["building_number"], Value["floor"], Value["house_number"], Value["Customer_ID"])
        executer.execute(query, values)
        mydb.commit()
        mydb.close()
    
    @app.get("/Customer_return_address/{Customer_ID}")
    def return_address(Customer_ID:int):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

        executer=mydb.cursor()

        query = "SELECT * FROM customer_address where Customer_ID= '{}';".format(Customer_ID)
        executer.execute(query)
        info=executer.fetchall()
        mydb.commit()
        value_list=[]
        for i in range(0,len(info)):
            value={"city":info[i][0],"area":info[i][1],"street_name":info[i][2],"building_number":info[i][3],"floor":info[i][4],"house_number":info[i][4],"ID":Customer_ID}
            value_list.append(value)
        mydb.close()
        return value_list
    
    @app.post("/Customer_add_visa")
    async def add_visa(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()

        query = "INSERT INTO visa (Card_Number, EXP_date, CVV, Customer_ID, Name_on_card) VALUES (%s,%s,%s,%s,%s)"
        values = (Value["Card_Number"], Value["EXP_date"],Value["CVV"], Value["Customer_ID"], Value["Name_on_card"])
        executer.execute(query, values)
        mydb.commit()
        mydb.close()

    @app.get("/Customer_return_visa/{Customer_ID}")
    def return_visa(Customer_ID:int):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

        executer=mydb.cursor()

        query = "SELECT * FROM Visa where Customer_ID= '{}';".format(Customer_ID)
        executer.execute(query)
        info=executer.fetchall()
        mydb.commit()
        value_list=[]
        for i in range(0,len(info)):
            value={"Card_Number":info[i][0],"EXP_date":info[i][1],"CVV":info[i][2],"Customer_ID":Customer_ID,"Name_on_card":info[i][4]}
            value_list.append(value)
        mydb.close()
        return value_list

    @app.get("/Customer_orders")
    def view_orders():
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

        executer=mydb.cursor()

        query = "SELECT * FROM orders;"
        executer.execute(query)
        info=executer.fetchall()
        mydb.commit()
        value_list=[]
        for i in range(0,len(info)):
            value={"address":info[i][0],"Payment_Method":info[i][1],"Visa":info[i][2],"Total":info[i][3],"Order_ID":info[i][4],"id_user":info[i][5]}
            value_list.append(value)
        mydb.close()
        return value_list     


    @app.post("/Confirm_order")
    async def Confirm_order(request:Request):

        Value=await request.json()

        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

        executer=mydb.cursor()

        query_1="SELECT Employee_ID FROM delivery ORDER BY RAND() LIMIT 1;"
        executer.execute(query_1)
        EMP=executer.fetchall()
        EMP_ID= EMP[0][0]

        query_2="SELECT Order_ID FROM orders ORDER BY Order_ID DESC LIMIT 1;"
        executer.execute(query_2)
        Last_id=executer.fetchall()
        order_id= Last_id[0][0]+1


        Addr=Value["city"]+","+Value["Area"]+","+Value["streetName"]+","+Value["buildingNumber"]+","+Value["floor"]+","+Value["houseNumber"]

        query_3= "INSERT INTO orders (address, Payment_Method, visa, total, Order_ID,Customer_ID,employee_ID) VALUES (%s,%s,%s,%s,%s,%s,%s)"
        values = (Addr, Value["Payment_Method"],Value["visa"][-4:], Value["total"],order_id, Value["Customer_ID"], EMP_ID)
        executer.execute(query_3,values)

        query_4= "UPDATE delivery set Orderes_Delivered=Orderes_Delivered+1 where employee_ID={};".format(EMP_ID)
        executer.execute(query_4)


        query_5 = "INSERT INTO ordered_products SELECT c.Product_ID,o.Order_ID FROM cart as c,orders as o WHERE c.Customer_ID={} and o.Order_ID={};".format(Value["Customer_ID"],order_id)
        executer.execute(query_5)
        
        query_6 = "DELETE FROM cart WHERE Customer_ID='{}';".format(
            Value["Customer_ID"])
        executer.execute(query_6)
        mydb.commit()
        mydb.close()
        return {"Value": "Order placed successfully"}

class product:

    @app.post("/Update_product")
    async def Update_product(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()

        query_1 = "UPDATE product set Amount={} WHERE Product_ID={};".format(Value['Quantity'],Value['Product_ID'])
        executer.execute(query_1)
        AMOUNT=executer.fetchall()
        mydb.commit()
        mydb.close()



    @app.post("/Add_Product/")
    
    async def Add_Product(request:Request):
        mydb = mysql.connector.connect(
            host="localhost", user=USERNAME, password=PASSWORD, database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()
        print("hi")
        try:

            query_1="SELECT Product_ID FROM Product ORDER BY Product_ID DESC LIMIT 1;"
            executer.execute(query_1)
            Last_id=executer.fetchall()
            Product_ID= Last_id[0][0]+1
                
            query_2 = "INSERT INTO Product (Product_ID,Product_Name,Company,Category,Price,Amount,Photo,Description) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
            values= (Product_ID,Value["Product_Name"],Value["Company"],Value["Category"],float (Value["Price"]),Value["Amount"],Value["Photo"],Value["Description"])
            executer.execute(query_2, values)
            mydb.commit()
            mydb.close()
            return {"Value": "True","ID":Product_ID}
        except mysql.connector.Error as err:
                    mydb.close()
                    return {"Value": "False_Duplicate"}


    @app.get("/Top_10_product/")
    def Top_10_product():
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

        executer = mydb.cursor()
        query = "SELECT Product_ID,Product_Name,Price,Photo,Amount FROM product ORDER BY Product_ID LIMIT 10;"
        executer.execute(query)
        info=executer.fetchall()
        mydb.commit()
        value_list=[]
        for i in range(0,len(info)):
            if info[i][4]>0:
                value={"id":info[i][0],"Product_Name":info[i][1],"Price":info[i][2],"Photo":info[i][3]}
                value_list.append(value)
        mydb.close()
        return value_list 

    
    @app.get("/ALL_product")
    def ALL_product():
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        executer = mydb.cursor()

        query = "SELECT * FROM Product"
        executer.execute(query)
        info=executer.fetchall()
        mydb.commit()
        value_list=[]


        for i in range(0,len(info)):
            if info[i][5]>0:

                query2 = "SELECT Active_Ingredients FROM ingredients WHERE Product_ID={};".format(info[i][0])
                executer.execute(query2)
                info2=executer.fetchall()
                mydb.commit()
                active_list=[]
                for x in range(0,len(info2)):
                    active_list.append(info2[x][0])

                value={"Title":info[i][1],"Name":info[i][1].split()[0],"id":info[i][0],"Active_Ingridiant":active_list,"Category":info[i][3],"Price":info[i][4],"Amount":info[i][5],"Photo":info[i][6],"Description":info[i][7]}
                value_list.append(value)
        mydb.close()
        return value_list
    
    @app.get("/category_product/{Category}")
    def category_product(Category:str):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        executer = mydb.cursor()
        
        query = "SELECT * FROM Product WHERE Category='{}'".format(Category)
        executer.execute(query)
        info=executer.fetchall()
        mydb.commit()
        value_list=[]
        
        for i in range(0,len(info)):
            if info[i][5]>0:
                query2 = "SELECT Active_Ingredients FROM ingredients WHERE Product_ID={};".format(info[i][0])
                executer.execute(query2)
                info2=executer.fetchall()
                mydb.commit()
                active_list=[]
                for x in range(0,len(info2)):
                    active_list.append(info2[x][0])
                value={"Title":info[i][1],"id":info[i][0],"Active_Ingridiant":active_list,"Category":info[i][3],"Price":info[i][4],"Amount":info[i][5],"Photo":info[i][6],"Description":info[i][7]}
                value_list.append(value)
        mydb.close()
        return value_list 
    
    
class Admin:

    @app.post("/Add_Employee")
    async def Add_Employee(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()
        query_1="SELECT Employee_ID FROM Employee ORDER BY Employee_ID DESC LIMIT 1;"
        executer.execute(query_1)
        Last_id=executer.fetchall()
        Employee_ID= Last_id[0][0]+1

        if Value["Department"]=="A":
            query_1 = "INSERT INTO Employee (Phone_Number,Employee_ID,Salary,Work_Email,First_Name,Last_Name,Department) VALUES (%s,%s,%s,%s,%s,%s,%s)"
            query_2="INSERT INTO app_admin (Admin_Password,Employee_ID) VALUES(%s,%s)"
            values_2=(Value["Password"],Employee_ID)
            values= (Value["Phone_Number"],Employee_ID,Value["Salary"],Value["Work_Email"],Value["First_Name"],Value["Last_Name"],Value["Department"])
            executer.execute(query_1, values)
            executer.execute(query_2, values_2)
            mydb.commit()
            mydb.close()

        elif Value["Department"]=="D":
            query_1 = "INSERT INTO Employee (Phone_Number,Employee_ID,Salary,Work_Email,First_Name,Last_Name,Department) VALUES (%s,%s,%s,%s,%s,%s,%s)"
            query_2="INSERT INTO delivery (Orderes_Delivered,Employee_ID) VALUES(%s,%s)"
            values_2=(0,Employee_ID)
            values= (Value["Phone_Number"],Employee_ID,Value["Salary"],Value["Work_Email"],Value["First_Name"],Value["Last_Name"],Value["Department"])
            executer.execute(query_1, values)
            executer.execute(query_2, values_2)
            mydb.commit()
            mydb.close()

        elif Value["Department"]=="C":
            query_1 = "INSERT INTO Employee (Phone_Number,Employee_ID,Salary,Work_Email,First_Name,Last_Name,Department) VALUES (%s,%s,%s,%s,%s,%s,%s)"
            query_2="INSERT INTO casher (Casher_Password,Employee_ID) VALUES(%s,%s)"
            values_2=(Value["Password"],Employee_ID)
            values= (Value["Phone_Number"],Employee_ID,Value["Salary"],Value["Work_Email"],Value["First_Name"],Value["Last_Name"],Value["Department"])
            executer.execute(query_1, values)
            executer.execute(query_2, values_2)
            mydb.commit()
            mydb.close()
    
        elif Value["Department"]=="P":
            query_1 = "INSERT INTO Employee (Phone_Number,Employee_ID,Salary,Work_Email,First_Name,Last_Name,Department) VALUES (%s,%s,%s,%s,%s,%s,%s)"
            query_2="INSERT INTO pharmacist (Job_registration_Number,Employee_ID) VALUES(%s,%s)"
            values_2=(Value["Job_registration_Number"],Employee_ID)
            values= (Value["Phone_Number"],Employee_ID,Value["Salary"],Value["Work_Email"],Value["First_Name"],Value["Last_Name"],Value["Department"])
            executer.execute(query_1, values)
            executer.execute(query_2, values_2)
            mydb.commit()
            mydb.close()

    @app.post("/Admin_login")
    async def Admin_login(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()

        query = "SELECT Work_Email,Admin_Password,e.employee_ID FROM employee as e right join app_admin as a on e.employee_ID=a.employee_ID WHERE Work_Email='{}';".format(Value["Work_Email"])
        executer.execute(query)
        result = executer.fetchall()
        if len(result)==0:
            mydb.close()
            return {"Value": "False"}
        else:
            if(result[0][0]==Value["Work_Email"])& (result[0][1]==Value["Password"]):
                mydb.close()
                return {"Value": "True","ID":result[0][2]}
            else:
                mydb.close()
                return {"Value": "False"}
               


    @app.get("/View_All_Customer/")
    def View_All_Customer():
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        executer=mydb.cursor()
        query = "SELECT * FROM Customer;"
        executer.execute(query)
        info=executer.fetchall()
        mydb.commit()
        value_list=[]
        for i in range(0,len(info)):
            value={"Phone_Number":info[i][0],"Customer_ID":info[i][1],"Password":info[i][2],"First_Name":info[i][3],"Last_Name":info[i][4],"Email":info[i][5],"Age":info[i][6]}
            value_list.append(value)
        mydb.close()
        return value_list 
    
        


class Cart:

    @app.post("/Update_Cart")
    async def Update_cart(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        Value = await request.json()
        executer = mydb.cursor()

        query_1 = "SELECT Amount FROM product WHERE Product_ID={}".format(Value['Product_ID'])
        executer.execute(query_1)
        AMOUNT=executer.fetchall()
        mydb.commit()

        if Value['Quantity']<1:
            query_2 = "DELETE FROM cart WHERE Product_ID = '{}' and Customer_ID='{}';".format( Value['Product_ID'],Value["Customer_ID"])
            executer.execute(query_2)
            mydb.commit()
            mydb.close()
        elif AMOUNT[0][0]>0 and Value['Quantity']<=AMOUNT[0][0]:
            query_3 = "UPDATE cart SET Quantity={}  Where Product_ID={} and Customer_ID ={};".format(Value['Quantity'],Value['Product_ID'], Value['Customer_ID'])
            executer.execute(query_3)
            mydb.commit()
            mydb.close()

        
    @app.post("/add_to_cart")
    async def add_to_cart(request:Request):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

        Value = await request.json()
        print(Value)
        executer = mydb.cursor()

        try:
            if Value['Quantity']>0: 
                query = "INSERT INTO cart (Product_ID,Customer_ID,Quantity) VALUES (%s,%s,%s)"
                values = (Value['Product_ID'], Value['Customer_ID'], Value['Quantity'])
                executer.execute(query, values)
                mydb.commit()
                mydb.close()
                return {"Value":"True"}
            
        except mysql.connector.Error as err:
            mydb.close()
            return {"Value":"False"}
            
        
    @app.get("/View_cart/{Customer_ID}")
    def View_cart(Customer_ID:int):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")

        executer=mydb.cursor()

        query = "SELECT Photo, Product_Name, Product_ID,Price,Amount FROM product WHERE Product_ID IN(SELECT Product_ID FROM cart WHERE Customer_ID='{}' )".format(Customer_ID)
        executer.execute(query)
        info=executer.fetchall()
        
        mydb.commit()
        value_list=[]
        for i in range(0,len(info)):
            query2 = "select Quantity from cart where Product_ID = {} and Customer_ID = {};".format(info[i][2],Customer_ID)
            executer.execute(query2)
            info2 = executer.fetchall()
            value = {"Photo": info[i][0], "Product_Name": info[i][1], "Product_ID": info[i][2], "price": int(info[i][3]), "Quantity": info2[0][0], "id": Customer_ID}
            value_list.append(value)
        mydb.close()
        return value_list 
            

    @app.post("/Delete_from_cart/{Product_ID}/{Customer_ID}")
    def View_cart(Product_ID:int,Customer_ID:int):
        mydb = mysql.connector.connect(host="localhost",user=USERNAME,password=PASSWORD,database="ammy_pharmacy")
        executer = mydb.cursor()
        query = "DELETE FROM cart WHERE Customer_ID='{}' and Product_ID='{}';".format(Customer_ID,Product_ID)
        executer.execute(query)
        mydb.commit()
        mydb.close()

    @app.get("/Categories")
    def categoriess():
        return  [
        {
            "title": "Blood pressure Drugs",
            "src": "https://penntoday.upenn.edu/sites/default/files/2020-04/blood-pressure-meds-teaser.jpg",
            "categ": "Blood-Pressure"
        },
        {
            "title": "Diabetics Drugs",
            "src": "https://novavidath.com/wp-content/uploads/2022/01/Anti-Aging-all-Service-600x600px-21-1-1024x1024.jpg",
            "categ": "Diabetes"
        },
        {
            "title": "Cold & Flu Drugs",
            "src": "https://media.gemini.media/img/large/2019/2/18/2019_2_18_16_28_59_957.jpg",
            "categ": "Anti-cold"
        }
    ]
       
        


            



str="Run"               
print(str)

    







    