FROM node:17-alpine3.12
WORKDIR /usr/app
COPY package.json .
COPY helloworld.proto .
COPY greeter_server.js .
RUN npm install 
CMD ["node", "greeter_server.js"]