FROM node:16-buster@sha256:a4baed9809deba446900d6e2bc6b92c3fe6ccff9ca2873f8d54e263595b02533 AS builder

WORKDIR /usr/src/app
COPY . .
COPY .env.build .env

RUN yarn install --frozen-lockfile
RUN yarn typecheck
RUN yarn build:highmem
RUN yarn workspaces focus --production --all

FROM node:16-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

EXPOSE 5000
CMD [ "yarn", "start:inject" ]
