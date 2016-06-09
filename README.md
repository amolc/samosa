This is version 1.0 

The idea is to help the teams from the asian countries adopt nodejs/mysql framework. We would modify upgrade this framework based on request and modifications coming along the way and help make it mature.

This is a model skeleton to start using nodejs-express-mysql and create simple API from the mysql table.
The idea is to make it easy to make json based api by giving the table names.

Directory Structure

app.js - Main File


Install

git clone git@github.com:amolc/samosa.git

cd samosa // Please do go into the samosa directory
npm install 
 
npm install 


[![Join the chat at https://gitter.im/amolc/samosa](https://badges.gitter.im/amolc/samosa.svg)](https://gitter.im/amolc/samosa?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


----------------- INSTALLATION INSTRUCTIONS ---------------------

1. Go to https://nodejs.org/ and download the setup for latest version. The setup will also ask to install npm; make sure you select it too.

2. download the project from https://github.com/amolc/samosa/ and paste it in destination folder of your choice OR
   enter git clone git@github.com:amolc/samosa.git in your command prompt

3. download xampp server from https://www.apachefriends.org/index.html as we will need it to setup our Database

4. Start xampp server and go to phpmyadmin using the link "localhost/phpmyadmin"

5. Enter Database name "icefire" and click enter. Your new database will be created.

6. Go to import option and select the "schema.sql" from db folder of samosa framework and hit enter. This will import all the relevant tables for our application

7. Open command prompt and go to the destination where you have copied the samosa framework setup
   Ex. If setup is in root directory of C: drive, then in your command prompt, the path to be set is "c:\samosa"

8. You have to install relevant packages for executing samosa framework.
    3.1 For 'express' enter "npm install express"
    3.2 For 'mysql' enter "npm install mysql"
    3.3 For 'mysql crud' enter "npm mysql-crud"

9. After above 3 packages are installed, enter "node app" and hit enter. The console will display the port number at which the app will be running

10. Go to your web browser and enter "localhost:portnumber". Ex. localhost:5000, hit enter and Voila! samosa is now running