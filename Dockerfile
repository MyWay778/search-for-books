FROM node:14-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
COPY package.json /src/app/package.json
COPY yarn.lock /src/app/yarn.lock
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]