FROM node:13.11.0-alpine
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
ENV PATH /usr/src/server/node_modules/.bin:$PATH
COPY package.json /usr/src/server/package.json

RUN npm install
COPY . /usr/src/server
EXPOSE 4001
CMD [ "npm", "start" ]