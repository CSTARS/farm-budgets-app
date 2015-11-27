# this is what the docs say to do, but can't get to work...
# pulling the 5-slim image and committing changes instead

FROM node:5-slim

ADD init.sh
ADD run.sh

RUN init.sh

CMD run.sh

# default port
EXPOSE 3021
