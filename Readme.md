# Route Studio

A responsive React workspace demo with four views connected using `react-router-dom`.

## Routes

- `/home` — welcome page with a workspace preview and product highlights.
- `/dashboard` — project progress, workspace stats, and a short focus list.
- `/login` — sign-in form.
- `/signup` — account creation form.

The root path (`/`) redirects to `/home`, and unknown paths also return to the home view. Navigation is available from the shared header and between the authentication pages.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`.

## Deploy on GitHub Pages

The GitHub Actions workflow builds the app and publishes the `dist` folder when changes are pushed to `main`. The Vite and React Router base paths are configured for the `prateekjain_task27` repository. The build also generates a GitHub Pages fallback so direct visits and refreshes on nested routes load the React app.

## Implementation notes

- `BrowserRouter`, `Routes`, `Route`, `Navigate`, and `NavLink` provide client-side routing and active navigation styles.
- Login and signup submissions are front-end demonstrations only. They validate required inputs and display a confirmation; no credentials are stored or transmitted.
- The layout uses responsive CSS and does not require an icon or component library.
