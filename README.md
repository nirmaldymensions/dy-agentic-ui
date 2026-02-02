# Agentic Sales Command Center

A sales command center UI for AI-assisted sales workflows. Sales reps get a daily briefing, lead and pipeline views, quote preparation, and a Customer 360 view—all presented as if powered by an orchestration agent.

## What It Does

- **Agentic Hub (Briefing)** – Daily summary, priority callouts, and recent “system actions” with agent insights.
- **Leads** – Today’s focus and pipeline leads with risk and agent context; drill into lead details.
- **Opportunity Detail** – Single-opportunity view with contextual intelligence, recommended actions, and confidence.
- **Quote Prep** – Validation checklist and “Generate Quote” flow into Customer 360.
- **Customer 360** – Account overview, health/pipeline/LTV, contacts, engagement, and agentic recommendations.
- **Quotes** – Quotes due this week / next week with filter UI.
- **Pipeline** – Pipeline value, at-risk deals, and deal cards with a “Full Context” slide-over panel.

**Current state:** Frontend-only wireframe with mock data. No backend or real AI integration; Supabase is in dependencies but unused.

## Tech Stack

| Category   | Technology        |
|-----------|--------------------|
| Language  | TypeScript         |
| UI        | React 18           |
| Routing   | react-router-dom 7 |
| Build     | Vite 5             |
| Styling   | Tailwind CSS 3    |
| Icons     | lucide-react      |

## Project Structure

```
├── index.html
├── src/
│   ├── main.tsx              # Entry: React root + App
│   ├── App.tsx               # Router, routes, navigation handlers
│   ├── index.css             # Tailwind directives
│   ├── components/           # Page and UI components
│   │   ├── Header.tsx
│   │   ├── BriefingDashboard.tsx
│   │   ├── OpportunityDetail.tsx
│   │   ├── LeadsPage.tsx
│   │   ├── LeadDetailPage.tsx
│   │   ├── QuotePrepPage.tsx
│   │   ├── Customer360Page.tsx
│   │   ├── QuotesPage.tsx
│   │   ├── PipelinePage.tsx
│   │   └── DealDetailPanel.tsx
│   └── hooks/
│       └── useTypingEffect.ts
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (or yarn/pnpm)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL shown (typically `http://localhost:5173`). No `.env` or backend is required.

### Build for production

```bash
npm run build
```

Output is in `dist/`. Preview the build:

```bash
npm run preview
```

### Other scripts

| Script       | Command              | Purpose                    |
|-------------|----------------------|----------------------------|
| Lint        | `npm run lint`       | Run ESLint                 |
| Type check  | `npm run typecheck`  | TypeScript (no emit)       |

## Routes

| Path           | Component          | Description                    |
|----------------|--------------------|--------------------------------|
| `/`            | BriefingDashboard  | Agentic Hub / home             |
| `/opportunity` | OpportunityDetail  | Single opportunity drill-down  |
| `/leads`       | LeadsPage          | Leads list                     |
| `/lead`        | LeadDetailPage     | Single lead detail             |
| `/quote-prep`  | QuotePrepPage      | Quote validation & generate     |
| `/customer360` | Customer360Page    | Account 360 view               |
| `/quotes`      | QuotesPage         | Quotes list                    |
| `/pipeline`    | PipelinePage       | Pipeline & deal panel          |

Navigation between pages uses React Router; some views receive data via `location.state` (e.g. `opportunity`, `lead`). Refreshing or opening those URLs directly will lose that state.

## Configuration & Environment

- **Environment:** No `.env` is required. `.env` is in `.gitignore`; the app does not read `VITE_*` or other env vars.
- **Vite:** `vite.config.ts` – React plugin; lucide-react excluded from pre-bundling.
- **Tailwind:** `tailwind.config.js` – content from `index.html` and `src/**/*.{js,ts,jsx,tsx}`.

## Key Components

- **App.tsx** – Defines all routes and navigation handlers; passes callbacks and router state to pages.
- **Header** – Global nav (Agentic Hub, Leads, Pipeline, Quotes, Customer 360), “Ask me anything!” search overlay, notifications, user.
- **BriefingDashboard** – Greeting, three insight cards, recent system actions list.
- **PipelinePage** – Pipeline stats and deal grid; “Full Context” opens **DealDetailPanel** (slide-over with typing-effect insights).
- **useTypingEffect** – Hook used in DealDetailPanel to animate AI insight and suggested steps.

## Data & State

- **Data:** All data is mock arrays/objects defined inside components. No API calls or Supabase usage in the codebase.
- **State:** React local state (`useState`) and React Router `location.state` only. No Redux or other global store.

## Dependencies (notable)

- `react`, `react-dom` – UI
- `react-router-dom` – Routing
- `lucide-react` – Icons
- `@supabase/supabase-js` – Present in `package.json` but **not used** in `src`; can be removed if not planned for use.

## License

Private / not specified.
