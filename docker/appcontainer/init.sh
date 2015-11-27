#! /bin/bash

# look to add this work to shell script then just add shell script
apt-get update -y && apt-get -y install git python make g++

git clone https://github.com/CSTARS/farm-budgets-app /farm-budgets-app

cd /farm-budgets-app && npm install

cd /farm-budgets-app && npm start
