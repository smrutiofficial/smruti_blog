FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# ARG NODE_ENV=production
# ENV NODE_ENV=$NODE_ENV

CMD ["npm", "run", "start"]
