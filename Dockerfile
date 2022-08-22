#https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:16 as builder
WORKDIR /usr/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
#stage 2
FROM node:16
WORKDIR /usr/app
COPY package*.json ./
RUN yarn install --production
COPY --from=builder /usr/app/.build ./build
COPY .env .

RUN yarn global add pm2
EXPOSE 8080
CMD ["pm2-runtime", "start", "build/index.js", "--name", "fargate-nodejs-graphql"]
