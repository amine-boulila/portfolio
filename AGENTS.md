# Agent Instructions

## Repository Shape

- This is a pnpm workspace. Use pnpm commands and keep `pnpm-lock.yaml` authoritative; do not introduce or update npm lockfiles.
- The primary product is the React/Vite portfolio in [artifacts/amine-boulila-portfolio](artifacts/amine-boulila-portfolio).
- The workspace also contains the Express API in [artifacts/api-server](artifacts/api-server), shared generated API clients and schemas under [lib](lib), and the database package in [lib/db](lib/db).

## Commands

- Install dependencies with `pnpm install`.
- Run the full typecheck with `pnpm run typecheck`.
- Build all packages with `pnpm run build`.
- Check the portfolio alone with `pnpm --filter @workspace/amine-boulila-portfolio run typecheck` and build it with `pnpm --filter @workspace/amine-boulila-portfolio run build`.
- Start the portfolio with `pnpm --filter @workspace/amine-boulila-portfolio run dev`. Its Vite config requires positive `PORT` and `BASE_PATH` environment variables.
- Run the API with `pnpm --filter @workspace/api-server run dev`; its health endpoint is `/api/healthz`.
- There are no repository test scripts currently defined. Run the narrowest available typecheck/build after changes.

## Implementation Conventions

- Keep portfolio content and project metadata in [src/data/portfolio.ts](artifacts/amine-boulila-portfolio/src/data/portfolio.ts); keep page behavior and composition in [src/App.tsx](artifacts/amine-boulila-portfolio/src/App.tsx).
- Use the existing `@/` alias for portfolio source imports and the existing Radix-based components in [src/components/ui](artifacts/amine-boulila-portfolio/src/components/ui) before adding new primitives.
- Preserve the visual system defined in [src/index.css](artifacts/amine-boulila-portfolio/src/index.css): Tailwind v4, CSS variables, Manrope/DM Mono, dark/light theme classes, responsive layouts, and reduced-motion support.
- Preserve section-aware navigation behavior and accessible anchors when changing the header or section IDs.
- For API contract changes, edit [lib/api-spec/openapi.yaml](lib/api-spec/openapi.yaml) first, then run the existing API code generation. Treat files under `lib/api-client-react/src/generated` and `lib/api-zod/src/generated` as generated output.
- Keep changes focused; do not reformat unrelated files or modify the workspace supply-chain settings in `pnpm-workspace.yaml` without a specific reason.

## Validation

- After UI changes, run the portfolio typecheck and build. Check both light and dark themes and narrow/mobile layouts when the change affects presentation or navigation.
- After shared/API changes, run the root typecheck and build, then the relevant package typecheck.
- Keep public links, CV paths under `artifacts/amine-boulila-portfolio/public/cv`, `data-testid` hooks, and keyboard-accessible modal/menu behavior working unless the task explicitly changes them.
