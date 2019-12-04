FROM node:10.15.3-stretch

RUN apt-get update && apt-get install -y chromium

COPY package.json ./ 

RUN npm install -g

ENV PATH="/node_modules/.bin/:$PATH"

WORKDIR app
