# E-Commerce-Backend
The challenge is to build the back end for an e-commerce site.

## Table Of Content
* [General Info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## General Info
Taking Express.js API and configuring it to use Sequelize to interact with a MySQL database. This app won’t be deployed so i’ll show a walkthrough video that demonstrates its functionality using Postman.<br>

Demonstration Video
<img src="./Develop/links/Walkthrough.webm">

## Technologies
Project is created with 
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Express](https://www.npmjs.com/package/express)
* [Dotenv](https://www.npmjs.com/package/dotenv)

## Installation
To get started clone this repository using 
<br>
```terminal
git clone git@github.com:BennAsabir/employee-tracker.git
```
Both Node.js and MySQL must be installed on your computer.

Install dependencies 
```terminal
npm init --y
``` 
```terminal
npm install express sequelize mysql2
```
Open up MySQL shell and input 
```terminal
source db/schema.sql
```
and 
```terminal
use ecommerce_db
```
Then quit MySQL shell and input the following in your terminal
```terminal
npm run seed
```
to start running application simply input 
```terminal
node server.js
```
Open Postman to GET, POST, PUT and DELETE from different routes.

## Usage
The application is used to GET data for each route(categories, products, or tags) as well as create, update, and delete data in those routes.

## License
Unlicensed!

## Questions
Questions about this repository? Please contact me at [Michaelrkhannah@gmail.com](mailto:Michaelrkhannah@gmail.com). View more of my work in GitHub at [MichaelHannah](https://github.com/mhannah3161) 