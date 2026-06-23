# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Deployment

This project includes ready-made deployment configs for common hosts.

- Netlify: `netlify.toml` (publishes the `dist` folder built with `npm run build`).
- Vercel: `vercel.json` configured to use `@vercel/static-build` with `dist` as output.

Build locally with:

```bash
npm install
npm run build
```

Then deploy via Netlify or Vercel by connecting your repository in their dashboards.

### Continuous deployment to Netlify from GitHub

This repo includes a GitHub Actions workflow that will build and deploy the `dist` folder to Netlify.

To enable it, set the following repository secrets under Settings → Secrets:

- `NETLIFY_AUTH_TOKEN` — a personal access token from your Netlify user account.
- `NETLIFY_SITE_ID` — the target Netlify Site ID (find in Site settings → Site details).

Once those secrets are set, pushes to `main` (or `master`) will trigger the deploy workflow.
