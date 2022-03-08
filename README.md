# express-sequelize
Express Sequelize boilerplate (MySQL and API support)

* It's basically a boilerplate to start an API with Express.js and Sequelize, connected to any database.
* I tested it with MySQL.
* It only have 1 GET `routes/api/locations`
* You can add as many as you want.
* The basic API includes a search using the `$like` operator as example.
* Includes a db sync, you can remove that if it's not needed. It will create the `locations` demo table.

# Get started
* $ git clone https://github.com/minorsolis/express-sequelize.git
* npm install
* I'm using `nodemon` to refresh the browser so:
* $ npm install nodemon

# Usage
* With nodemon: `nodemon index.js`
* Regular node `node index.js`

# Finally
* It was tested with node `v16.14.0`

