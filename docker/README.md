
## Basics

Running containers
```
docker ps
```

All containers
```
docker ps -a
```

## MongoDB
https://hub.docker.com/_/mongo/

```
# --name [Assign a name to the container]
# -d [Run container in background and print container ID]

docker run --name mongo -d mongo
```

## Build Farm Budget App Image
Based on NodeJS image: https://hub.docker.com/_/node/

```
docker build -t farm-budget-app .
```

```
docker build --no-cache -t farm-budget-app .
```

## Running Container
docker run -t mongo --name mongo
docker run --link mongo:mongo -i -t  farm-budget-app:v0.3  /bin/bash

## Docker Conainter Cleanup

```
# stop
docker stop [container name]

# remove
docker rm [container name]

# remove All
docker rm `docker ps --no-trunc -aq`
```
