
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
cd appcontainer

docker build -t farm-budget-app:[version] .
```

## Running App
```
docker run -d -v /data/db:/data/db --name mongo mongo
docker run --link mongo:mongo -v /etc/farm-budgets-app:/etc/farm-budgets-app --name webapp farm-budget-app:[version]
```

Run bash to look around (with command details)
```
docker run
  # connect the container named mongo to this container
  # exposes: https://docs.docker.com/v1.8/userguide/dockerlinks/#environment-variables
  --link mongo:mongo

  # mount local (machine) volume
  # by default on OSX /Users is shared to Boot2Docker vm
  #
  -v /Users/jrmerz/dev/etc/farm-budgets-app:/etc/farm-budgets-app

  # expose port
  # https://docs.docker.com/engine/reference/run/#expose-incoming-ports
  -p 3021:3021

  # -i   Keep STDIN open even if not attached
  # -t   Allocate a pseudo-tty
  # basically -ti together required for shell access
  -i -t
  farm-budget-app:v0.4
  /bin/bash
```


## Commit Changes
```
docker commit [container id] [image name]:[image tag]
docker push ahbpnw/farm-budgets-app:[image tag]
```

## Docker Container Cleanup

```
# stop
docker stop [container name]

# remove
docker rm [container name]

# remove All
docker rm `docker ps --no-trunc -aq`
```

## Connect to Boot2Docker VM
user: docker
pass: tcuser

# Ubuntu / apt-get
https://docs.docker.com/engine/installation/ubuntulinux/

# Docker Hub

docker push [repo org]/[repo name]:[repo tag]
