FROM node:latest
WORKDIR /app
VOLUME /app

COPY ./ .

RUN npm ci
EXPOSE 9090
ADD run-json-srv.sh /run-json-srv.sh
CMD ["npm run", "server"]
