FROM node:14-alpine AS builder
ENV NODE_ENV production

RUN mkdir -p /d/docker/dockerTestApp

WORKDIR /d/docker/dockerTestApp

COPY . /d/docker/dockerTestApp/
RUN npm install

ENTRYPOINT ["node", "testServer.js"]
CMD ["npm", "start"]

EXPOSE 3000
