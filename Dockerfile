FROM  node:12
RUN mkdir /app
RUN mkdir /configs
RUN mkdir /configs/images
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "start"]