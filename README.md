# MLB Stats API – OpenAPI spec and TypeScript client

OpenAPI 3.1 spec for the [MLB Stats API](https://statsapi.mlb.com/api) (undocumented). This repo is the source of truth for the spec and can generate a TypeScript client.

## Source of truth

- **Spec**: All editable spec content lives under `spec/`.
  - Entry point: `spec/openapi.yaml`
  - Paths: `spec/paths/*.yaml`
  - Components: `spec/components/parameters/`, `spec/components/schemas/`
- **Generated artifacts** (not committed): `bundle.yaml` (bundled spec) and `src/` (TypeScript client). Generate them before building or publishing.

## Commands

| Command      | Description                                      |
|-------------|---------------------------------------------------|
| `make lint` | Lint the spec (Redocly)                          |
| `make bundle` | Bundle the spec to `bundle.yaml`                 |
| `make gen-ts` | Generate TypeScript client from `bundle.yaml` into `src/` |
| Full build | `make bundle && make gen-ts && npm run build` (produces `dist/` for the published package) |

Install dependencies with `pnpm install` or `npm install`.

## Workflow

1. Edit only files under `spec/`.
2. Run `make lint` to check the spec.
3. Run `make bundle` then `make gen-ts` to regenerate the client.
4. Run `npm run build` to produce `dist/`.

## Upstream API

Base URL: `https://statsapi.mlb.com/api`. The upstream API is undocumented; this spec is maintained by mapping observed request/response behavior.

## License

See `spec/openapi.yaml` and `package.json` for license and contact details.
