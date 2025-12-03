# Stage 1: Build the Angular application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package configuration and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build


# Stage 2: Serve the application from a lightweight server
FROM lighttpd/lighttpd:latest

# Copy the built application from the 'builder' stage
COPY --from=builder /app/dist/boat-app/browser /var/www/localhost/htdocs

# Copy the custom lighttpd configuration
COPY lighttpd.conf /etc/lighttpd/lighttpd.conf

EXPOSE 80

# The base image already has a CMD to start lighttpd,
# so we don't need to specify it again.
