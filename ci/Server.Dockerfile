FROM node:latest
WORKDIR /app
VOLUME /app

COPY ./ .

RUN npm ci
EXPOSE 9090
CMD node ./server/server.js
