# Colors
RESET=\033[0m
GREEN=\033[32m
YELLOW=\033[33m
CYAN=\033[36m

.PHONY: all
all: help

# Cite: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
help: ## Display this help page
	@grep -E '^[a-zA-Z0-9/_-]+:.*?## .*$$' $(MAKEFILE_LIST) | 		\
	sort | 															\
	awk ' 															\
		BEGIN {FS = ":.*?## "; print "${GREEN}mlb-season help:\n"} \
		{printf "${CYAN}%-30s${RESET} %s\n", $$1, $$2} 				\
	  	END {print "\n${YELLOW}See README.md for more information${RESET}\n"}'

.PHONY: bundle
bundle: ## Builds the yaml bundle
	npx --yes @redocly/cli bundle -d --remove-unused-components -o bundle.yaml spec/openapi.yaml

.PHONY: gen-ts
gen-ts: ## Bundle the spec into a single file
	npx --yes @openapitools/openapi-generator-cli generate -g typescript-fetch -i bundle.yaml -o src --additional-properties with-interfaces=true
