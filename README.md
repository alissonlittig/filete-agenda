# Filete — landing page for a barbershop booking SaaS

Landing page for **Filete**, a fictional scheduling SaaS for barbershops (per-barber calendars, WhatsApp reminders, Pix deposits, commission reports). Includes an interactive slot picker, a monthly/annual pricing toggle and an FAQ.

> Portfolio demo. Brand, prices, testimonial and numbers are fictional.

![Desktop](docs/desktop.png)
![Mobile](docs/mobile.png)

## Stack
Vite + Preact (React API via JSX), self-hosted fonts (Fraunces, Inter), plain CSS. Pricing logic lives in `src/pricing.js` and is covered by Vitest.

Lighthouse (mobile): Performance 93 · Accessibility 100 · Best Practices 100 · SEO 100.

## Run
```
npm install
npm run dev      # local dev
npm test         # unit tests
npm run build    # production build in dist/
```
CI (`.github/workflows/pages.yml`) runs tests and build, then deploys to GitHub Pages.
