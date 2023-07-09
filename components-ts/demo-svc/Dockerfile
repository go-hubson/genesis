
FROM node:18-alpine AS builder

WORKDIR /builder
COPY ./package.json ./tsconfig.json ./.esbuild.js ./
COPY ./src ./src

RUN npm install
RUN node .esbuild.js

FROM gcr.io/distroless/nodejs:18

WORKDIR /app
COPY --from=builder /builder/dist ./

CMD ["main.js"]
