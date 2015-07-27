Farm Budgets App
===========
[farmbudgets.org](http://farmbudgets.org)

This application allows for the online view and editing of farm budget data. The
main budget data repo can be found [here](https://github.com/CSTARS/farm-budgets-data).

## Install

### Init Database
First make sure you have PostgreSQL installed and running on your system.  Then pull the data repo.
```
git clone https://github.com/CSTARS/farm-budgets-data
```

Then make run the import task from the makefile.  You will need to supply a ./usda.key file
in the root directory.  You can get the key here: [http://quickstats.nass.usda.gov/api](http://quickstats.nass.usda.gov/api).

```
cd farm-budgets-data
echo 'usda.key:=[your key]' > usda.key
make import
```

You will need a ~/.pg_service.conf file in your home directory as well.  It should have
an entry that looks like:

```
[farm-budgets-data]
host=localhost
port=5432
user=[username]
password=[password]
db=[db you want to add schema to]
```

### Init Development Environment

Now install all dependencies for client and server.  Note, [NodeJS](https://nodejs.org/) and [Bower](http://bower.io/) are required.

```
npm run-script init-dev
```

Finally, create a private config file for configuring access to postgres.
```
vim /etc/farm-budgets-app/config.js
```
It's contents should look something like this
```
module.exports = {
   postgres : {
        url : 'postgres://[username]:[password]@localhost/[database]'
   },
   port: 3000 // you can switch local ports here
}
```


## Run Server
Once you have initialized the PostgreSQL database and installed all development dependencies you simply run the following command to start the server.
```
npm run-script run-dev
```

This will serve the /public (development) code.  To run the build/production code in /dist simply run
```
npm run
```

## Build Client
To build the project for deployment to production run:
```
npm run-script build
```

## More info
This project is built using the [KrakenJS](http://krakenjs.com/) stack.  View site
for more info on project structure.  Build process are preformed with [Grunt](http://gruntjs.com/).
