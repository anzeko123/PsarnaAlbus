FROM node:18.12.1-alpine
WORKDIR /psarnaAlbus/microservices/register
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]