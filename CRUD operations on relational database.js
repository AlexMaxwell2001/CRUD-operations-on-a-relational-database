/*BRIEF DESCRIPTION OF DATABASE:
(I used remotemysql.com and repl.it for this assignment
and done nothing locally)
I used two tables, MyStoreDetails and MyStoreAddress.
MyStoreDetails holds the personal details of the user
and MyStoreAddress holds the address of the user.
Both these tables have a shared primary key ,CustomerID.
This is needed from referring to a user between tables for 
deleting user from the tables etc.Each table has 10 rows
and each represents the 10 users.It follows the column header
names in the Specification apart from the County/City as 
I had to change it to CountyORCity as '/' is an error 
 putting in column name*/

var mysql = require('mysql');
//variable for the random user generation for the R of CRUD 
var randomUser = 0;
//variable for the random user generation for the U of CRUD
var randomUser2=0;
//This is to generate a variety for creating new users
var countRotation = Math.floor(Math.random()*5); 

//connect to the database
var con = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'tY6GJ2PydM',
  password: 'tj0lPTL05k',
  database: 'tY6GJ2PydM'
});

/*using the connect we carry out SQL queries to carry
out the CRUD activities*/
con.connect(function(err)
{
  /*this method controls the C of CRUD activities and
  creates a new user Record and adds it to the database*/
  if(err)throw err;
  //if it goes out of range bring it back
  if(countRotation >4)
  {
    countRotation = 0 ;
  }
  //if our random generator falls on 0 create a user in Details with the same ID as the user in Address
  else if(countRotation == 0)
  {
    //we query the databse and insert a new user into the details table
    con.query("INSERT INTO MyStoreDetails VALUES ('498767880', 'Mr.', 'John', 'Smith', '0945863940', 'JohnSH@outlook.com')",function(err,result,fields)
    {
      if(err)throw err; 
    });
    //we query the databse and insert a new user into the address table
    con.query("INSERT INTO MyStoreAddress VALUES ('498767880', 'Netherland', 'Pompeii', 'Venzula','Monaghan', 'E90S234')",function(err,result,fields)
    {
      if(err)throw err; 
    });
  }
  //if our random generator falls on 1 create a user in Details with the same ID as the user in Address
  else if(countRotation == 1 )
  {
    //we query the database and insert a new user into the details table
    con.query("INSERT INTO MyStoreDetails VALUES ('123948523', 'Miss', 'Charlotte', 'Burke', '0841001404', 'CB@live.ie')",function(err,result,fields)
    {
      if(err)throw err;
    });
    //we query the databse and insert a new user into the address table
    con.query("INSERT INTO MyStoreAddress VALUES ('123948523', 'Dundrum', 'Blanchardstown', 'Drogheda','Dublin', 'D90D342')",function(err,result,fields)
    {
      if(err)throw err; 
    });
  }
  //if our random generator falls on 2 create a user in Details with the same ID as the user in Address
  else if(countRotation == 2)
  {
    //we query the database and insert a new user into the details table
    con.query("INSERT INTO MyStoreDetails VALUES ('940583020', 'Mrs.', 'Naomi', 'Thunders', '0834708809', 'NaomiT@gmail.com')",function(err,result,fields)
    {
      if(err)throw err; 
    });
    //we query the database and insert a new user into the address table
    con.query("INSERT INTO MyStoreAddress VALUES ('940583020', 'Dundalk', 'Kells', 'Drogheda','Dublin', 'G83L235')",function(err,result,fields)
    {
      if(err)throw err; 
    });
  }
  //if our random generator falls on 3 create a user in Details with the same ID as the user in Address
  else if(countRotation == 3)
  {
    //we query the database and insert a new user into the details table
    con.query("INSERT INTO MyStoreDetails VALUES ('343464647', 'Dr.', 'Becky', 'Maloney', '0345789403', 'Becky.Maloney.2019@mumail.ie')",function(err,result,fields)
    {
      if(err)throw err; 
    });
    //we query the database and insert a new user into the address table
    con.query("INSERT INTO MyStoreAddress VALUES ('343464647', 'Drumree', 'Salthill', 'Clane','Mayo', 'M98M098')",function(err,result,fields)
    {
      if(err)throw err; 
    });
  }
  //if our random generator falls on 4 create a user in Details with the same ID as the user in Address
  else if(countRotation == 4)
  {
    //we query the database and insert a new user into the details table
    con.query("INSERT INTO MyStoreDetails VALUES ('990883020', 'Mr.', 'Jermey', 'Kyle', '0845707708', 'JeremyTheMan@gmail.com')",function(err,result,fields)
    {
      if(err)throw err; 
    });
    //we query the database and insert a new user into the address table
    con.query("INSERT INTO MyStoreAddress VALUES ('990883020', 'Kilyon', 'Naas', 'Maynooth','Kildare', 'L12L345')",function(err,result,fields)
    {
      if(err)throw err; 
    });
  }

  /*This method controls the R of CRUD activities
  and retrieves a randomUser's information from the 
  database*/
  //Query the details table to retrieve all the data 
  con.query("SELECT CustomerID ,FirstName, LastName,Title,Email from MyStoreDetails",function(err,result,fields)
  {
    if(err)throw err;
    //generate the random user
    randomUser = Math.floor(Math.random() *result.length);
    //print out all the data at the row of the randomUser
    console.log("CustomerId:" + result[randomUser].CustomerID + " Title:" + result[randomUser].Title + " Name:" + result[randomUser].FirstName + " " + result[randomUser].LastName + " Email:" + result[randomUser].Email  );
  });
  //Query the address table to retrieve all the data
  con.query("SELECT CustomerID ,AddressLine1, AddressLine2,Town,CountyORCity,Eircode from MyStoreAddress",function(err,result,fields)
  {
    if(err)throw err;
    //print out all the data of the row of the randomUser
    console.log(" AddressLine1: " + result[randomUser].AddressLine1 + " AddressLine2:" + result[randomUser].AddressLine2 + " Town:" + result[randomUser].Town + " CountyORCity:" + result[randomUser].CountyORCity + " Eircode:" + result[randomUser].Eircode  );
  });

  /*This method covers the U of the CRUD activities
  updating a random users all address info and three items of
  the person's details*/
  //Query for all the data of the Details table 
  con.query("SELECT CustomerID ,FirstName, LastName,Title,Email from MyStoreDetails",function(err,result,fields)
  {
    if(err)throw err;
    //generate a random user
    randomUser2 = Math.floor(Math.random() *result.length);
    //store the ID of the random user
    var userId = result[randomUser2].CustomerID;
    //use UPDATE to update the email,phone and title of the ID of the random user
    con.query("UPDATE MyStoreDetails SET Email='Updated@gmail.com', Mobile='0898989899',Title='Dr.' WHERE CustomerID = '"+userId+"'", function(err,result,fields)
    {
      if(err)throw err;
    });
  });
  //Query all of the data from the Address table
  con.query("SELECT CustomerID,AddressLine1 ,AddressLine2, Town,CountyORCity,Eircode from MyStoreAddress",function(err,result,fields)
  {
    if(err)throw err;
    //store the ID of the random user
    var userId = result[randomUser2].CustomerID;
    //use UPDATE to update all of the random user address information 
    con.query("UPDATE MyStoreAddress SET AddressLine1='BallyMount', AddressLine2='Red Cow',Town='St. Kevins', CountyORCity='Dublin' ,Eircode ='A82Y930' WHERE CustomerID = '"+userId+"'", function(err,result,fields)
    {
      if(err)throw err;
    });
  })

  /*This method controls the D of the CRUD
  activites and deletes which matches a specfic email, 
  phone and name*/
  /*Query the Details table to find the ID of a user specified 
  by email,name and phone*/
  con.query("SELECT CustomerID FROM MyStoreDetails WHERE (Email='Bettyboos@gmail.com' && Mobile= '873245732' && FirstName='Betty'&& LastName='Burke')",function(err,result,fields)
  {
    //use DELETE to delete from the details table the user with the specified email,phone and name
    con.query("DELETE FROM MyStoreDetails WHERE (Email='Bettyboos@gmail.com' && Mobile= '873245732' && FirstName='Betty'&& LastName='Burke')", function(err,result,fields) 
    { 
      if(err)throw err;
    });
    /*use the result of the SELECT query to determine which user in the 
    address table to delete,ultimately removing any information on the specified user from both tables*/
    con.query("DELETE FROM MyStoreAddress WHERE CustomerID = '"+result[0].CustomerID+"'", function(err,result,fields) 
    { 
      if(err)throw err;
    });
  });
});
