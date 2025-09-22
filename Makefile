# Website Factory Standard Makefile
# This file is copied to each new website repository
# Provides consistent build and development commands across all projects

version?=dev
name=$(shell basename $(CURDIR))

.PHONY: deps
deps:
	npm install --no-audit --no-fund

.PHONY: develop
develop: deps
	npm run dev

.PHONY: preview
preview: deps
	npm run build && npm run preview

.PHONY: build
build: deps
	npm run build

.PHONY: clean
clean:
	rm -rf node_modules dist

# Back-compat aliases for consistency
.PHONY: develop-site preview-site build-site
develop-site: develop
preview-site: preview
build-site: build

# Additional useful targets
.PHONY: serve
serve: build
	npx serve dist

.PHONY: test
test: deps
	npm run test

.PHONY: lint
lint: deps
	npm run lint

.PHONY: format
format: deps
	npm run format

# Help target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  make develop  - Start development server"
	@echo "  make preview  - Build and preview production build"
	@echo "  make build    - Create production build"
	@echo "  make serve    - Serve production build locally"
	@echo "  make clean    - Remove dependencies and build artifacts"
	@echo "  make test     - Run tests (if configured)"
	@echo "  make lint     - Run linter (if configured)"
	@echo "  make format   - Format code (if configured)"
	@echo "  make help     - Show this help message"
