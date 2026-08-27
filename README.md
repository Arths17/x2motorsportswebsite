# X2 Motorsports

Site for X2 Motorsports — an independent motorsports team running two
programs: competitive RaceRoom sim racing today, and a student-built solar
car challenge in its founding stage.

Live at [x2motorsportswebsite.vercel.app](https://x2motorsportswebsite.vercel.app).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js (App Router) + Tailwind CSS, deployed on Vercel.

## Structure

- `src/app/page.tsx` — assembles the single-page site
- `src/components/sections/` — Hero, Sim Racing, Solar Car, Sponsors, Team, Contact
- `src/components/Nav.tsx`, `Footer.tsx` — shared chrome
- `public/team/` — founder photos
