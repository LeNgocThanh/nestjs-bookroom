FROM node:20

WORKDIR /usr/src/api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 6868

CMD ["npm", "run", "start:prod"]