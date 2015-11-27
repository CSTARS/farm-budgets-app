# this is what the docs say to do, but can't get to work...
# pulling the 5-slim image and committing changes instead

FROM node:5-slim

# look to add this work to shell script then just add shell script
RUN apt-get update -y && apt-get -y install git python make g++

RUN git clone https://github.com/CSTARS/farm-budgets-app /farm-budgets-app

RUN cd /farm-budgets-app && npm install

CMD cd /farm-budgets-app && npm start

# default port
EXPOSE 3021
