FROM node:16.13.1-alpine AS builder
WORKDIR /app
COPY package*.json /app
RUN yarn 
COPY . .
ARG SERVICE_URL
ENV SERVICE_URL=$SERVICE_URL
RUN yarn build --output-path ./dist --configuration production

FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
