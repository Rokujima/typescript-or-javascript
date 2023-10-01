FROM node:18-alpine
WORKDIR /gateway
COPY ./gateway/package.json ./gateway/package-lock.json* ./
RUN npm install --production
COPY ./gateway .
CMD ["npm", "run", "start:prod"]
