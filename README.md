# One Million Checkboxes

Dont worry, I counted.

This project has real time one million checkboxes as well as a scoreboard of the top checkboxers.

![banner](/public/banner.png)

## Features

- Light/dark mode toggle
- Real time updates
- PWA

## Tech Stack

**Client:** React, Next, TailwindCSS, Shadcn

**Server:** Node, Convex

## Environment Variables

#### Clerk

Create a clerk project for authentication and copy the API keys `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, In addition create a convex webhook and copy it's secret `CLERK_WEBHOOK_SECRET`, Lastly copy the JWT secret `CLERK_JWT_ISSUER_DOMAIN`.

#### Convex

Create a convex project and link to it using `npx convex dev` copy the `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL`. <br />
Remember to add the following environment variables to convex: `CLERK_WEBHOOK_SECRET`, `CLERK_JWT_ISSUER_DOMAIN`.

## Acknowledgements

Inspired by [eieio.games](https://eieio.games/)

![Logo](/public/favicon.ico)
