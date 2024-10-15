# Base image
FROM node:20

WORKDIR /usr/src/admin

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]
