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
	@grep -E '^[$$()a-zA-Z0-9/_-]+:.*?## .*$$' $(MAKEFILE_LIST) | 		\
	sort | 															\
	awk ' 															\
		BEGIN {FS = ":.*?## "; print "${GREEN}mlb-season help:\n"} \
		{printf "${CYAN}%-30s${RESET} %s\n", $$1, $$2} 				\
	  	END {print "\n${YELLOW}See README.md for more information${RESET}\n"}'

.PHONY: lint
lint: ## Lint the spec
	npx --yes @redocly/cli lint --lint-config error spec/openapi.yaml

.PHONY: bundle
bundle: ## Builds the yaml bundle
	npx --yes @redocly/cli bundle --remove-unused-components -o bundle.yaml spec/openapi.yaml

.PHONY: gen-ts
gen-ts: ## Bundle the spec into a single file
	npx --yes @openapitools/openapi-generator-cli generate -g typescript-fetch -i bundle.yaml -o src --additional-properties with-interfaces=true,stringEnums=true

VERSION := $(shell git describe --tags --abbrev=0 | sed -Ee 's/^v|-.*//')
.PHONY: version
version: ## Current Version
	@echo v$(VERSION)

SEMVER_TYPES := major minor patch
BUMP_TARGETS := $(addprefix bump-,$(SEMVER_TYPES))
.PHONY: $(BUMP_TARGETS)
$(BUMP_TARGETS):
	$(eval bump_type := $(strip $(word 2,$(subst -, ,$@))))
	$(eval V := $(shell if [[ "$(bump_type)" == "major" ]]; then \
		echo $(VERSION) | awk -F. -v OFS=. -v f=1 -v ff=2 -v fff=3 '{ $$f++; $$ff=0; $$fff=0 } 1'; \
	fi; \
	if [[ "$(bump_type)" == "minor" ]]; then \
		echo $(VERSION) | awk -F. -v OFS=. -v f=2 -v ff=3 '{ $$f++; $$ff=0; } 1'; \
	fi; \
	if [[ "$(bump_type)" == "patch" ]]; then \
		echo $(VERSION) | awk -F. -v OFS=. -v f=3 '{ $$f++; } 1'; \
	fi))
	@echo "Version: $(V)"
	@sed 's/version: .*/version: $(V)/' spec/openapi.yaml > tmp && mv tmp spec/openapi.yaml
	@sed 's/"version": .*/"version": "$(V)",/' package.json > tmp && mv tmp package.json
	@git add .; git commit -m 'Bumping Version: $(V)'
	@git tag $(V)
	@git push; git push --tags