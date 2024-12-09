FROM node:slim

WORKDIR /express-docker

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

CMD ["nodemon", "app.js"]

EXPOSE 3000