import { test, expect } from '@playwright/test'

/**
 * Traverses all app routes and verifies navigation flow.
 * Run: npx playwright test (with dev server running, or let webServer start it).
 */
test.describe('App navigation flow', () => {
  test('traverses all routes from Briefing and verifies flow', async ({
    page,
  }) => {
    // Start at home
    await page.goto('/')
    await expect(page).toHaveURL('/')
    await expect(
      page.getByRole('heading', { name: /Good morning, Nirmal/i })
    ).toBeVisible()

    // Header: Agentic Hub (already home), then Leads (header nav only)
    await page
      .getByRole('navigation')
      .getByRole('button', { name: 'Leads' })
      .click()
    await expect(page).toHaveURL('/leads')
    await expect(
      page.getByRole('heading', { name: /leads requiring attention/i })
    ).toBeVisible()

    // Leads → Open first lead detail (detail icon on card)
    await page
      .getByRole('button', { name: 'Open lead details' })
      .first()
      .click()
    await expect(page).toHaveURL('/lead')
    await expect(page.getByRole('heading', { name: 'ACME CORP' })).toBeVisible()

    // Lead Detail → Back to Leads
    await page.getByRole('button', { name: /Back to Leads/i }).click()
    await expect(page).toHaveURL('/leads')

    // Lead Detail (again) → Quote Prep
    await page
      .getByRole('button', { name: 'Open lead details' })
      .first()
      .click()
    await expect(page).toHaveURL('/lead')
    await page.getByRole('button', { name: /Quote Prep/i }).click()
    await expect(page).toHaveURL('/quote-prep')
    await expect(
      page.getByRole('heading', { name: /Validation Checklist/i })
    ).toBeVisible()

    // Quote Prep → Generate Quote → Customer 360
    await page.getByRole('button', { name: 'Generate Quote' }).click()
    await expect(page).toHaveURL('/customer360')
    await expect(
      page.getByRole('heading', { name: /Agentic Recommendations/i })
    ).toBeVisible()

    // Customer 360 → Back to Quote Prep
    await page.getByRole('button', { name: /Back to Quote Prep/i }).click()
    await expect(page).toHaveURL('/quote-prep')

    // Header: Pipeline
    await page
      .getByRole('navigation')
      .getByRole('button', { name: 'Pipeline' })
      .click()
    await expect(page).toHaveURL('/pipeline')
    await expect(
      page.getByRole('heading', { name: /Pipeline Intelligence/i })
    ).toBeVisible()

    // Pipeline: Full Context opens panel (same URL); close by clicking backdrop
    await page.getByRole('button', { name: 'Full Context' }).first().click()
    await expect(page.getByText('AI Strategic Insights')).toBeVisible()
    await page
      .locator('.fixed.inset-0')
      .first()
      .click({ position: { x: 10, y: 10 } })
    await expect(page).toHaveURL('/pipeline')

    // Header: Quotes
    await page
      .getByRole('navigation')
      .getByRole('button', { name: 'Quotes' })
      .click()
    await expect(page).toHaveURL('/quotes')
    await expect(
      page.getByRole('heading', { name: /Quotes Command Center/i })
    ).toBeVisible()

    // Header: Agentic Hub (home)
    await page
      .getByRole('navigation')
      .getByRole('button', { name: 'Agentic Hub' })
      .click()
    await expect(page).toHaveURL('/')
    await expect(
      page.getByRole('heading', { name: /Good morning, Nirmal/i })
    ).toBeVisible()

    // Briefing: Review Overdue Deals → Opportunity
    await page.getByRole('button', { name: 'Review Overdue Deals' }).click()
    await expect(page).toHaveURL('/opportunity')
    await expect(
      page.getByRole('heading', { name: 'Acme Corporation' })
    ).toBeVisible()

    // Opportunity → Back to Briefing
    await page.getByRole('button', { name: /Back to Briefing/i }).click()
    await expect(page).toHaveURL('/')

    // Briefing: click first Recent System Actions row → Opportunity
    await page.getByText('RECENT SYSTEM ACTIONS').waitFor()
    await page.getByRole('button', { name: /Global Systems Inc\./ }).click()
    await expect(page).toHaveURL('/opportunity')
    await expect(
      page.getByRole('heading', { name: /Contextual Intelligence/i })
    ).toBeVisible()

    // Back to Briefing
    await page.getByRole('button', { name: /Back to Briefing/i }).click()
    await expect(page).toHaveURL('/')

    // Briefing: Review Account 360 → Customer 360
    await page.getByRole('button', { name: 'Review Account 360' }).click()
    await expect(page).toHaveURL('/customer360')
    await page.getByRole('button', { name: /Back to Hub/i }).click()
    await expect(page).toHaveURL('/')

    // Briefing: Generate Quote (from home)
    await page.getByRole('button', { name: 'Generate Quote' }).click()
    await expect(page).toHaveURL('/quote-prep')
  })
})
