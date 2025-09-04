# ALX listing App.

## Description.

ALX Listing App is a clone of the Airbnb listing page. It helps users easily find and book apartments while traveling, on tours, business trips, or other visits away from home. The platform is open to anyone interested in booking short-stay accommodations. It streamlines the entire process — from listing to booking to checkout — with support for agents, third-party services, and secure payment integration.

The frontend is built with Next.js, TypeScript, and Tailwind CSS.

## Platform features.

User authentication system.
Property listing page.
Property listing details page.
Booking page.
Checkout page.
Comment and reviews system.

## Project structure

├── components/ # Reusable UI components
│ └── Button.tsx # Example component
| └── Card.tsx # Example component
├── pages/ # Next.js routes
│ ├── api/ # API endpoints
| | | └── Hello.ts # Example component
│ └── index.tsx # Homepage
| └── \_app.tsx # Homepage
| └── \_document.tsx # Homepage
├── public/ # Static assets (images, icons)
| ├──index.tsx # Homepage
| | | └── assets # Homepage
├── styles/
│ └── globals.css # Tailwind entry point
├── tailwind.config.js
├── tsconfig.json
└── package.json

## How to run on local server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
