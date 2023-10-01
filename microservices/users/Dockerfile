FROM node:16-alpine
WORKDIR /users
COPY ./users/package.json ./users/package-lock.json* ./
RUN npm install --production
COPY ./users .
CMD ["npm", "run", "start:prod"]
