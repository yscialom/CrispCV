# Stage 1: Build the Angular application
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY angular.json tsconfig.json tsconfig.app.json ./
COPY src/ ./src/
COPY public/ ./public/
COPY config/ ./config/
COPY tools/ ./tools/

RUN npm run build

# Stage 2: Serve the application from a lightweight server
FROM jitesoft/lighttpd:latest

COPY --from=builder /app/dist/CrispCV/browser /var/www/localhost/htdocs

ENV CONFIG_FILE=/etc/lighttpd/conf.d/10-spa.conf
COPY build/lighttpd.conf /etc/lighttpd/conf.d/10-spa.conf

EXPOSE 80
