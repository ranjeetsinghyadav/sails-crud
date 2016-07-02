# Demo SAILS Application

a [Sails](http://sailsjs.org) application.

Its a very simple POC sails application which exposes REST APIs for fetching transaction details. 

There are three models involved - Person, BankDetails & TransactionDetails. 

Person-to-BankDetails have 1-to-many association, TransactionDetails have one way association with sender(Person) and receiver(Person).

TransactionDetails, along with above associations, have attributes like orderNumber, txnAmount and status.

Aprat from default APIs which are exposed by sails framework itself based on models design, This application has exposed few other simple APIs 
to get transaction details based on different criterias/filters like - failed transactions, success transactions and transactions 
which are having txnAmount greater amount than a specific value.

As instructed, I have used two datasources - mysql db to persist TransactionDetails model and mongodb for Person, BankDetails persistance.

# Prerequisites to run this application

    Nodejs, npm, sails framework, mongodb, mysql db

# Project Setup

1. clone this project in your machine

2. cd to sails-crud directory 

3. edit/configure mysql and mongodb database connection settings(host, port, user, password, database) in config/connections.js file.

    Note: One can use localDiskDb as default datastore to quickly setup the application. For doing this one has to comment out below line 
    
        Line# 43 to 66 in connections.js
        
        Line# 10 (connection property) in all models (i.e. Person.js, BankDetails.js & TransactionDetails.js)

4. Run below commands to install project dependencies

        npm install
    
        npm install sails-disk

        npm install sails-mysql

        npm install sails-mongo

        npm install node-uuid

# Run application in dev mode using below command

    sails lift

# Create metadata(test data) for Person, BankDetails & TransactionDetails models using sails default APIs 

    I used chrome's "Advance REST client" to execute & test below APIs. Make sure you have set application/json in Content-Type HTTP Header.

    Content-Type: application/json

# Populate Person model

HTTP Method: POST 

Request URL:- 

    http://localhost:1337/person/

JSON Payload 1:- 

    {
      "firstName":"Ranjeet",
      "lastName":"Yadav",
      "phoneNumber":"9972429140",
      "email": "ranjeets@pb.com",
      "accounts":[]
    }

JSON Payload 2:- 

    {
      "firstName":"Sourav",
      "lastName":"Sachin",
      "phoneNumber":"9845377339",
      "email": "sachin@remitr.com",
      "accounts":[]
    }

# Verify Person data

HTTP Method: GET 

Request URL:- 

    http://localhost:1337/person/

# Populate BankDetails model

HTTP Method: POST 

Request URL:- 

    http://localhost:1337/bankDetails/

JSON Payload 1:- 

    {
      "bankName":"CITI",
      "address":"Sector-45, Gurgaon, Haryana, India",
      "accountNumber":"9972429140-111",
      "accountType": "Savings",
      "customerEmail": "ranjeets@policybazaar.com",
      "owner":1
    }

JSON Payload 2:- 

    {
      "bankName":"HDFC",
      "address":"Andheri East, Mumbai, MH, India",
      "accountNumber":"9845377339-111",
      "accountType": "Savings",
      "customerEmail": "sachin@remitr.com",
      "owner":2
    }

# Verify Bank Details

HTTP Method: GET 

Request URL:- 

    http://localhost:1337/bankDetails/

# Populate TransactionDetails model

HTTP Method: POST 

Request URL:- 

    http://localhost:1337/transactionDetails/

JSON Payload 1:- 

    {
      "txnAmount":501.51,
      "status":"success",
      "sender":1,
      "receiver": 2
    }

JSON Payload 2:- 

    {
      "txnAmount":101,
      "status":"pending",
      "sender":1,
      "receiver": 2
    }

JSON Payload 3:- 

    {
      "txnAmount":1000,
      "status":"failed",
      "sender":1,
      "receiver": 2
    }

JSON Payload 4:- 

    {
      "txnAmount":1500,
      "status":"success",
      "sender":2,
      "receiver": 1
    }

JSON Payload 5:- 

    {
      "txnAmount":600,
      "status":"pending",
      "sender":2,
      "receiver": 1
    }

# APIs to GET transaction details based on different filters

HTTP Method: GET 

Get All transactions:-

    http://localhost:1337/transactionDetails/

Get Successful transactions:-

    http://localhost:1337/transactionDetails/success

Get Failed transactions:-

    http://localhost:1337/transactionDetails/failed

Get all transactions having transaction amount greater than or equals to 600:-

    http://localhost:1337/transactionDetails/filter?amountGreaterThan=600




