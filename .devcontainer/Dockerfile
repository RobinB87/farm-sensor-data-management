FROM node:20-alpine3.19

RUN apk update && apk add git

RUN npm install -g @nestjs/cli@10.3.2
RUN npm install -g @angular/cli@16.2.14

USER node

WORKDIR /app