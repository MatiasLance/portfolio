# syntax=docker/dockerfile:1
# check=error=true

FROM node:20.18-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000 

CMD ["npm", "run", "dev"]