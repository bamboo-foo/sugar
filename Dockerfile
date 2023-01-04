FROM node:16-alpine

RUN apk add dumb-init

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

EXPOSE 3000

USER node

CMD ["dumb-init", "node", "bin/www"]
