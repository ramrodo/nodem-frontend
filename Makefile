CURRENT_DIRECTORY=$(shell pwd)

BASE_COMPOSE=-f $(CURRENT_DIRECTORY)/docker/docker-compose.yml
DEV_COMPOSE=$(BASE_COMPOSE) -f $(CURRENT_DIRECTORY)/docker/docker-compose.dev.yml
TEST_COMPOSE=$(BASE_COMPOSE) -f $(CURRENT_DIRECTORY)/docker/docker-compose.test.yml

# Build image
build:
	@docker-compose $(BASE_COMPOSE) build

# Test image
test:
	@docker-compose $(TEST_COMPOSE) run web-app
	@docker-compose $(TEST_COMPOSE) down

# Clean up test env
test-down:
	@docker-compose $(TEST_COMPOSE) down

# Lift dev environment
dev:
	@docker-compose $(DEV_COMPOSE) up

# Destroy dev environment
dev-down:
	@docker-compose $(DEV_COMPOSE) down

# Ssh into container
bash:
	@docker-compose $(DEV_COMPOSE) exec web-app /bin/bash
