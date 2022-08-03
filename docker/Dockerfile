FROM node:16.14.0

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY yarn

COPY ..

USER node

EXPOSE 3000

CMD ["node", "server.ts"]