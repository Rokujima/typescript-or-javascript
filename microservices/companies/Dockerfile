FROM node:16-alpine
WORKDIR /companies
COPY ./companies/package.json ./companies/package-lock.json* ./
RUN npm install --production
COPY ./companies .
CMD ["npm", "run", "start:prod"]
