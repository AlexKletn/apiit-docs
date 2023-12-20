FROM node:latest
WORKDIR /app
VOLUME /app

COPY ./ .
COPY ../package-lock.json ./

RUN npm ci
EXPOSE 9090
CMD ["npm run", "server"]
