# Makefile for managing the Dockerized Angular application

# --- Variables ---
APP_NAME := angular-resume
DEV_CONTAINER_NAME := $(APP_NAME)-dev
PROD_IMAGE_NAME := $(APP_NAME)-prod
PROD_CONTAINER_NAME := $(PROD_IMAGE_NAME)
CURRENT_UID := $(shell id -u)
CURRENT_GID := $(shell id -g)

.PHONY: all help usage build build-app start stop test clean dist-clean build-prod-image start-prod stop-prod lint format

help: usage

# --- User-facing Targets ---

usage:
	@echo "Makefile for Dockerized Angular App"
	@echo ""
	@echo "Usage:"
	@echo "  make help                Show this help message."
	@echo "  make                     Alias for 'make build'. Builds the app artifacts on the host."
	@echo "  make build               Builds the application, creating a 'dist/' directory on the host."
	@echo "  make start               Start the development server with live-reload on http://localhost:4200."
	@echo "  make stop                Stop the development server."
	@echo "  make test                Run unit tests."
	@echo "  make clean               Remove intermediary build files (node_modules, .angular)."
	@echo "  make dist-clean          Remove all produced files (dist) and intermediary files."
	@echo ""
	@echo "Code Quality:"
	@echo "  make lint                Run ESLint checks within a Docker container."
	@echo "  make format              Run Prettier to format code within a Docker container."
	@echo ""
	@echo "Production Simulation:"
	@echo "  make build-prod-image    Build the production-ready lighttpd Docker image."
	@echo "  make start-prod          Run the production container on http://localhost:8080."
	@echo "  make stop-prod           Stop the production container."
	@echo ""


# Run unit tests
test:
	@echo "Running unit tests (via Docker)..."
	@docker run --rm -v $(CURDIR):/app -w /app --user $(CURRENT_UID):$(CURRENT_GID) node:20-alpine sh -c "npm install && npx ng test --watch=false"



# Build the application artifacts on the host by running a temporary container
build:
	@echo "Building application artifacts in ./dist ..."
	@docker run --rm -v $(CURDIR):/app -w /app --user $(CURRENT_UID):$(CURRENT_GID) node:20-alpine sh -c "npm install && npm run build"

# Start the Angular development server (ng serve)
start:
	@echo "Starting development container '$(DEV_CONTAINER_NAME)' on http://localhost:4200 ..."
	@docker run --rm -d -p 4200:4200 --name $(DEV_CONTAINER_NAME) -v $(CURDIR):/app -w /app --user $(CURRENT_UID):$(CURRENT_GID) node:20-alpine sh -c "npm install && npx ng serve --host 0.0.0.0"

# Stop the development server
stop:
	@echo "Stopping development container '$(DEV_CONTAINER_NAME)' ..."
	@docker stop $(DEV_CONTAINER_NAME) || echo "Container already stopped."
	@docker rm $(DEV_CONTAINER_NAME) || echo "Container already removed."


# --- Code Quality Targets ---

lint:
	@echo "Running ESLint (via Docker)..."
	@docker run --rm -v $(CURDIR):/app -w /app --user $(CURRENT_UID):$(CURRENT_GID) node:20-alpine sh -c "npm install && npm run lint"

format:
	@echo "Running Prettier (via Docker)..."
	@docker run --rm -v $(CURDIR):/app -w /app --user $(CURRENT_UID):$(CURRENT_GID) node:20-alpine sh -c "npm install && npm run format"


# Clean intermediary build files
clean:
	@echo "Cleaning intermediary files (node_modules, .angular)..."
	@rm -rf node_modules
	@rm -rf .angular

# Clean all produced files (dist) and intermediary files
dist-clean: clean
	@echo "Cleaning produced files (dist)..."
	@rm -rf dist

# --- Production Simulation Targets ---

# Build the production Docker image using the Dockerfile
build-prod-image: build
	@echo "Building production Docker image '$(PROD_IMAGE_NAME)'..."
	@docker build -t $(PROD_IMAGE_NAME) -f build/Dockerfile .

# Run the production image as a container
start-prod:
	@echo "Starting production container '$(PROD_CONTAINER_NAME)' on http://localhost:8080 ..."
	@docker run --rm -d -p 8080:80 --name $(PROD_CONTAINER_NAME) $(PROD_IMAGE_NAME)

# Stop the production container
stop-prod:
	@echo "Stopping production container '$(PROD_CONTAINER_NAME)'..."
	@docker stop $(PROD_CONTAINER_NAME) || true
