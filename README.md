# Salvador Zyrill James T. — Portfolio

A responsive personal portfolio for Salvador Zyrill James T., built with React, Vite, and plain CSS. It includes a bento-style dashboard, a one-page scrollable layout, persistent light/dark themes, a short loading splash, resume-based skills and education, six academic project cards, and responsive navigation. Project artwork is temporary and can be replaced with screenshots.

## Run locally

1. Install [Node.js](https://nodejs.org/) (Node 20.19+ or 22.12+ for the current Vite release).
2. In this folder, install the packages:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Create a Formspree form and set its recipient address in Formspree.
5. Copy the example environment file and set your endpoint:

   ```powershell
   Copy-Item .env.example .env.local
   ```

   Edit `.env.local` and replace `your-form-id` with your Formspree form ID.
6. Start or restart the Vite server and open the local URL printed by Vite.

Set `VITE_FORMSPREE_ENDPOINT` to the same endpoint in your hosting provider's environment-variable settings before deploying. The endpoint is public in a frontend app; it identifies the form but does not reveal the recipient address. Do not put private API keys or recipient details in `VITE_` variables.

Build and lint the application with:

```sh
npm run build
npm run lint
```

## Personalize the content

- Update the profile, education, project cards, and skills in `src/App.jsx`.
- Add a project's public GitHub URL as its `repository` property to show a GitHub button in its overview dialog.
- Replace the project artwork in `src/App.jsx` with the supplied project screenshots when available.
- The contact form posts to Formspree. The recipient address is configured in the Formspree dashboard, not displayed in the portfolio.
- Adjust colors, spacing, responsive breakpoints, and decorative project artwork in `src/App.css`.
- Global typography, keyboard focus styles, and reduced-motion support live in `src/index.css`.
- The dashboard/simple view and light/dark theme preferences are stored in `localStorage` as `portfolio-view` and `portfolio-theme`.
- Poppins is loaded from Google Fonts; the design falls back to a sans-serif font if that service is unavailable.
