FROM node:14

WORKDIR /app
COPY ./app/package*.json ./app/

WORKDIR /app/app
RUN npm install

COPY ./app/bin ./bin/
COPY ./app/src ./src/
COPY ./app/app.js ./

RUN npm i -g pm2

EXPOSE 10000
CMD ["pm2-runtime", "start", "./bin/www.js"]