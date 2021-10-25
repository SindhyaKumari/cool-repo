FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 8000
CMD ["node", "ïndex.js"]