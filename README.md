# VCF Orchestrator Guide

A free, open cookbook for **VCF Operations Orchestrator 9.x**, written by Mayank ([@imtrinity94](https://github.com/imtrinity94)) and Claude.

**Read it:** https://imtrinity94.github.io/vcf-orchestrator-guide/

## Status

| Chapter | Status |
|---|---|
| 1. Getting Orchestrator running | Draft, in review |
| 2. Configuring the appliance | Draft, in review |
| 3. Visual programming | Draft in progress (3.1–3.4) |
| 4–8 | Coming soon |

## Working on the book

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

Pages live in `src/content/docs/`. Each recipe is an `.mdx` file that uses these components:

| Component | Use |
|---|---|
| `<Recipe type="ready \| how \| works \| more \| see">` | The five recipe sections, drawn on the workflow line |
| `<Figure n="1.4" caption="…" src="screenshots/ch01/fig-1-4.png" />` | A numbered figure. Leave out `src` to show a "Screenshot to capture" slot |
| `<ThenNow then="…" now="…" />` | What changed since vRO 5.5–7 |
| `<Verify>…</Verify>` | A statement that still needs checking in a lab |

### Naming sample content

Example workflows, actions and other Orchestrator objects in the book use one neutral convention:

| Object | Convention | Example |
|---|---|---|
| Action module | `com.vcfguide.chapterN` | `com.vcfguide.chapter3` |
| Workflow folder | `VCF Orchestrator Guide/Chapter N` | `VCF Orchestrator Guide/Chapter 3` |
| Configuration / resource folder | `VCF Orchestrator Guide/Chapter N` | — |

Orchestrator JavaScript samples are plain ES5.1.

### Adding a screenshot

1. Capture it as described in the figure's slot (see `SHOTLIST.md`).
2. Save it as `public/screenshots/ch01/fig-1-4.png`.
3. Add `src="screenshots/ch01/fig-1-4.png"` to that `<Figure>`.

Pushing to `main` deploys the site via GitHub Actions.

## Licence

Text: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Code samples: MIT. Not affiliated with or endorsed by Broadcom.
