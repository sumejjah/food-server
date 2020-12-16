# food-server
Server for getting data from Edamam API.

## Starting the server
Before starting the server for the first time, add .env file to the root folder. The file must contain the following values:

```
APPLICATION_ID = <<app_id>>
API_KEY = <<api_key>>
ROOT_URL = https://api.edamam.com
```
Please contact me to provide these variables. After adding .env file with correct values, run the following commands:

```
npm install
npm start
```
The client will be running at: http://localhost:5000.
