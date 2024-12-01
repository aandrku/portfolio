FROM golang:1.23.1-alpine AS server-builder

WORKDIR /server

COPY ./server .

RUN go mod tidy && go build -o server main.go


FROM node:22.9.0 AS client-builder

WORKDIR /app

COPY ./client .

RUN npm install

RUN npm run build && npm run build:scss


FROM alpine:latest

WORKDIR /app

COPY --from=client-builder /app/dist ./dist
COPY --from=client-builder /app/css ./css
COPY --from=client-builder /app/src/pages ./pages

COPY --from=server-builder /server/server ./

EXPOSE 80

RUN chmod +x ./server

CMD ["./server"]

