## VS code
 
Run VS code and create new directoty - for example : "Popchuk-task"
Clone https://github.com/HVasylchenko/popchuk-task.git in this directory
Run "npm i google-cloud/local-auth dotenv express googleapis"

# Crunchdatabase

In order to have access to Crunchdatabase you need to copy your Crunchbase Basic API Key in save it in .index.js file as "X-cb-user-key" parameter

## Google sheets

You have to create a new project and enable Google Sheets API and create Credentials in Service account (https://console.cloud.google.com)

Add new key and save it in work directory as credentials.json

Create new sheet in your Google sheets 

and save the Id of your sheet in .index.js file as spreadsheetId var

Example 
https://docs.google.com/spreadsheets/d/1u78QOSGec1uMTBi0MGDu75kow8WQzYianQNxeYE95no/edit#gid=0
Your Id is between https://docs.google.com/spreadsheets/d/  and /edit#gid=0

Save name of table in .index.js file as range parameter

## VS code

Run `npm node index.js` and go to http://localhost:5000/  You have to see "Successfully submitted! Thank you!" at the screen 

Refresh the page !!!

## Google sheets

In your sheet you have to see new record " 1eb37109-3b93-01a9-177f-fee2cb1bfcdc	Uber "



