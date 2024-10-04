FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

ARG NEXT_PUBLIC_ENTE_ENDPOINT=https://foo.bar
ENV NEXT_PUBLIC_ENTE_ENDPOINT=${NEXT_PUBLIC_ENTE_ENDPOINT}

ARG NEXT_PUBLIC_ALBUMS_ENDPOINT=https://foo.bar
ENV NEXT_PUBLIC_ALBUMS_ENDPOINT=${NEXT_PUBLIC_ALBUMS_ENDPOINT}

RUN yarn install && yarn build

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/apps/photos/out .

RUN npm install -g serve

ENV PORT=3000
EXPOSE ${PORT}

CMD serve -s . -l tcp://0.0.0.0:${PORT}