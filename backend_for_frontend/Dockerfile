FROM node:18.12.1-alpine
WORKDIR /psarnaAlbus/backend_for_frontend
COPY package*.json ./
RUN npm ci
COPY ./ ./
#EXPOSE 5000
#EXPOSE 5001
CMD ["npm", "start"]