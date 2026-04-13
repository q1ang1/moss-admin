# Repository Guidelines

## Project Structure & Module Organization
This repository is a `pnpm` workspace managed by Turborepo. Main app code lives in `apps/admin/src`, with routes in `src/router`, views in `src/views`, and shared styles in `src/styles`. Reusable UI components are published from `packages/ui/src`, with tests in `packages/ui/src/__tests__`. Documentation lives in `docs`, with VitePress config under `docs/.vitepress`. Generated artifacts such as `dist/`, `.vitepress/dist/`, `.turbo/`, `playwright-report/`, and `test-results/` should not be edited manually.

## Build, Test, and Development Commands
Use Node `>=22.12.0` and `pnpm@10`.

- `pnpm install`: install all workspace dependencies.
- `pnpm dev:admin`: run the admin app locally with Turbo filtering.
- `pnpm dev:docs`: run the VitePress docs site locally.
- `pnpm build`: build all workspaces, including `apps/admin` and `packages/ui`.
- `pnpm lint`: run ESLint across the workspace.
- `pnpm typecheck`: run TypeScript and `vue-tsc` checks.
- `pnpm test`: run workspace tests; currently targets `@moss/ui`.
- `pnpm check`: run lint, typecheck, test, and build in CI order.
- `pnpm --filter moss-admin test:e2e`: run Playwright tests for `apps/admin`.

## Coding Style & Naming Conventions
Follow the flat config in `eslint.config.mjs`. The codebase uses TypeScript, Vue 3 SFCs, and ESM. Use 2-space indentation and keep naming aligned with existing lowercase files such as `workbench-view.vue` and `app-layout.vue`. Prefer descriptive kebab-case filenames and keep exported package names under the `@moss/*` scope.

## Testing Guidelines
Unit tests use Vitest with Vue Test Utils; place them beside the source in `src/__tests__` and use `*.spec.ts` naming, for example `metric-card.spec.ts`. End-to-end tests use Playwright from `apps/admin/tests/e2e`. Before opening a PR, run the smallest relevant check locally, then `pnpm check` when the change affects shared code, build output, or routing.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commits, for example `feat: bootstrap moss admin monorepo` and `fix: publish admin app at pages root`. Keep commit subjects short and scoped by intent: `feat:`, `fix:`, `docs:`. PRs should describe the change, note affected packages or apps, link related issues, and include screenshots for UI or docs changes. If CI behavior is affected, mention which local commands were run.

## CI & Deployment Notes
GitHub Actions runs `pnpm check:affected` on pull requests and `pnpm check` on pushes to `main`. Pages deployment builds `apps/admin` at the site root and publishes docs under `/docs/`, so changes to Vite base paths, routing, or docs config should be verified carefully.
