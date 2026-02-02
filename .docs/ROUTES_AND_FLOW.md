# Routes, Buttons, Links & Navigation Flow

Use this guide to traverse the app at **http://localhost:5173/** (run `npm run dev` first).

**Automated check:** Run `npm run test:e2e` to verify the full flow in a headless browser (Playwright). Use `npm run test:e2e:ui` to step through in the Playwright UI.

---

## Route Summary

| Route          | Component                       | How to get there                                                                 |
| -------------- | ------------------------------- | -------------------------------------------------------------------------------- |
| `/`            | BriefingDashboard (Agentic Hub) | Header **Agentic Hub**, or **Back to Briefing** from Opportunity                 |
| `/opportunity` | OpportunityDetail               | From Briefing: **Review Overdue Deals** or click a **Recent System Actions** row |
| `/leads`       | LeadsPage                       | Header **Leads**, or **Back to Leads** from Lead Detail                          |
| `/lead`        | LeadDetailPage                  | From Leads: **Open Lead Details** on any lead card                               |
| `/quote-prep`  | QuotePrepPage                   | Header **Generate Quote** (from Briefing), or **Quote Prep →** from Lead Detail  |
| `/customer360` | Customer360Page                 | Header **Customer 360**, or **Generate Quote** on Quote Prep                     |
| `/quotes`      | QuotesPage                      | Header **Quotes**                                                                |
| `/pipeline`    | PipelinePage                    | Header **Pipeline**                                                              |

---

## 1. Header (on every page)

| Control              | Action                          | Route          |
| -------------------- | ------------------------------- | -------------- |
| **Agentic Hub**      | Navigate                        | `/`            |
| **Leads**            | Navigate                        | `/leads`       |
| **Pipeline**         | Navigate                        | `/pipeline`    |
| **Quotes**           | Navigate                        | `/quotes`      |
| **Customer 360**     | Navigate                        | `/customer360` |
| **Ask me anything!** | Opens search overlay (no route) | —              |
| Bell, User           | No navigation                   | —              |

---

## 2. Home: `/` (BriefingDashboard)

| Button / Link                        | Action              | Route / Result                                                    |
| ------------------------------------ | ------------------- | ----------------------------------------------------------------- |
| **View Today's Leads**               | Navigate            | `/leads`                                                          |
| **Review Overdue Deals**             | Navigate with state | `/opportunity` (Acme Corporation / Enterprise Platform Migration) |
| **Generate Quote**                   | Navigate            | `/quote-prep`                                                     |
| **Recent System Actions** (each row) | Navigate with state | `/opportunity` (row’s account/opportunity in state)               |

---

## 3. Opportunity Detail: `/opportunity`

| Button / Link        | Action   | Route / Result |
| -------------------- | -------- | -------------- |
| **Back to Briefing** | Navigate | `/`            |

_Other buttons (Launch Prep Panel, Review SLA Documents, etc.) and **Execute Next Best Action** have no route—UI only._

---

## 4. Leads: `/leads`

| Button / Link                          | Action              | Route / Result               |
| -------------------------------------- | ------------------- | ---------------------------- |
| **Open Lead Details** (each card)      | Navigate with state | `/lead` (that lead in state) |
| **Call Before Visit** / **Reschedule** | No navigation       | —                            |

---

## 5. Lead Detail: `/lead`

| Button / Link                            | Action        | Route / Result |
| ---------------------------------------- | ------------- | -------------- |
| **Back to Leads**                        | Navigate      | `/leads`       |
| **Quote Prep →** (in Quick Actions)      | Navigate      | `/quote-prep`  |
| **Send Follow-up** / **Update Timeline** | No navigation | —              |
| **Execute: Send "New Leadership" Kit →** | No navigation | —              |
| **INSIGHT VIEW**                         | No navigation | —              |

---

## 6. Quote Prep: `/quote-prep`

| Button / Link            | Action        | Route / Result                                      |
| ------------------------ | ------------- | --------------------------------------------------- |
| **Back to Opportunity**  | Navigate      | `/` (or previous context; handler goes to briefing) |
| **Generate Quote**       | Navigate      | `/customer360`                                      |
| **REVIEW** / **NOT NOW** | No navigation | —                                                   |

---

## 7. Customer 360: `/customer360`

| Button / Link                                                         | Action                 | Route / Result |
| --------------------------------------------------------------------- | ---------------------- | -------------- |
| **Back to Quote Prep**                                                | Navigate               | `/quote-prep`  |
| Account tabs (Azure Services Corp, SecureBank Inc, EduTech Solutions) | No navigation (static) | —              |
| **Draft Follow-up** / **View All** / opportunity rows                 | No navigation          | —              |

---

## 8. Quotes: `/quotes`

| Button / Link                   | Action                | Route / Result |
| ------------------------------- | --------------------- | -------------- |
| Quote cards (**READY TO SEND**) | No navigation         | —              |
| **Filter proposals...** input   | No behavior (UI only) | —              |

---

## 9. Pipeline: `/pipeline`

| Button / Link                         | Action                                              | Route / Result |
| ------------------------------------- | --------------------------------------------------- | -------------- |
| **Full Context** (each deal card)     | Opens **DealDetailPanel** overlay (no route change) | —              |
| **VIEW DEAL MAP**                     | No navigation                                       | —              |
| **Pivot Strategy** (on overdue deals) | No navigation                                       | —              |
| **View Quote**                        | No navigation                                       | —              |

**DealDetailPanel (overlay):** **Add Task** / **Update Lead** have no navigation; **X** closes the panel.

---

## Traversal Order (recommended flow)

1. **Start:** Open http://localhost:5173/ → you’re on **Agentic Hub** (`/`).
2. **Header:** Click **Leads** → `/leads`.
3. **Leads → Lead detail:** Click **Open Lead Details** on any card → `/lead`.
4. **Lead → Quote prep:** Click **Quote Prep →** → `/quote-prep`.
5. **Quote prep → Customer 360:** Click **Generate Quote** → `/customer360`.
6. **Customer 360 → Quote prep:** Click **Back to Quote Prep** → `/quote-prep`.
7. **Header:** Click **Pipeline** → `/pipeline`.
8. **Pipeline:** Click **Full Context** on any deal → DealDetailPanel opens (same route). Close with **X**.
9. **Header:** Click **Quotes** → `/quotes`.
10. **Header:** Click **Agentic Hub** → `/`.
11. **Briefing → Opportunity:** Click **Review Overdue Deals** → `/opportunity` (with Acme Corporation / Enterprise Platform Migration).
12. **Opportunity → Briefing:** Click **Back to Briefing** → `/`.
13. **Briefing → Opportunity (row):** Click any row under **Recent System Actions** → `/opportunity` (with that row’s data).
14. **Briefing → Quote prep:** Click **Generate Quote** → `/quote-prep`.

---

## Data passed via router state

- **`/opportunity`** – `location.state.opportunity` (e.g. `{ account, opportunity }`). Lost on refresh or direct open.
- **`/lead`** – `location.state.lead` (full lead object). Lost on refresh or direct open. _Note: LeadDetailPage does not use this prop; content is hardcoded._

---

## Non-route UI

- **Header:** “Ask me anything!” → search overlay (ESC to close).
- **Pipeline:** “Full Context” → DealDetailPanel slide-over (closes with overlay click or X).

All other buttons listed as “No navigation” are placeholders with no route or overlay wired.
