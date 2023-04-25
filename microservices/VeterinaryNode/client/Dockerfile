FROM node:18.12.1-alpine
WORKDIR /psarnaAlbus/microservices/VeterinaryNode/client
COPY package*.json ./
RUN npm ci
COPY ./ ./
CMD ["npm", "start"]