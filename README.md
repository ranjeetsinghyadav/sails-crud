# Application build in SAILS, Exposed CRUD APIs along with few data filter APIs based on input

a [Sails](http://sailsjs.org) application

# Prerequisites to run this application
Installations - Nodejs, npm, sails framework

npm install
npm install sails-mysql
npm install sails-mongo
npm install node-uuid

# Few API examples along with their respective payload

POST http://localhost:1337/person/

{
  "firstName":"Ranjeet",
  "lastName":"Yadav",
  "phoneNumber":"9972429140",
  "email": "ranjeets@pb.com",
  "accounts":[]
}

{
  "firstName":"Sourav",
  "lastName":"Sachin",
  "phoneNumber":"9845377339",
  "email": "sachin@remitr.com",
  "accounts":[]
}

GET http://localhost:1337/person/

--------------------------------------------------------

POST http://localhost:1337/bankDetails/

{
  "bankName":"CITI",
  "address":"Sector-45, Gurgaon, Haryana, India",
  "accountNumber":"9972429140-111",
  "accountType": "Savings",
  "customerEmail": "ranjeets@policybazaar.com",
  "owner":1
}

{
  "bankName":"HDFC",
  "address":"Andheri East, Mumbai, MH, India",
  "accountNumber":"9845377339-111",
  "accountType": "Savings",
  "customerEmail": "sachin@remitr.com",
  "owner":2
}

GET http://localhost:1337/bankDetails/

--------------------------------------------------------

POST http://localhost:1337/transactionDetails/

{
  "txnAmount":501.51,
  "status":"success",
  "sender":1,
  "receiver": 2
}

{
  "txnAmount":101,
  "status":"pending",
  "sender":1,
  "receiver": 2
}

{
  "txnAmount":1000,
  "status":"failed",
  "sender":1,
  "receiver": 2
}

{
  "txnAmount":1500,
  "status":"success",
  "sender":2,
  "receiver": 1
}

# APIs to GET transaction details based on different filters

GET http://localhost:1337/transactionDetails/
GET http://localhost:1337/transactionDetails/success
GET http://localhost:1337/transactionDetails/failed
GET http://localhost:1337/transactionDetails/filter?amountGreaterThan=600


