# MIRTECO 3D Demo (EN/ES)

This is a fast Next.js demo with:
- `/en` and `/es` locales (middleware redirect)
- 3D hero (React Three Fiber)
- Catalog demo

## Run locally
1) Install Node.js (LTS)
2) In this folder:
```bash
npm install
npm run dev
```
Open http://localhost:3000 (it will redirect to /en)

## Deploy to Vercel (online demo)
### Option 1: GitHub (recommended)
1) Create a new GitHub repo (empty)
2) Upload all files from this folder to the repo (or `git push`)
3) Go to Vercel → Add New → Project → import the repo → Deploy
4) Your demo will be online with `/en` and `/es`

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Notes
- The 3D model is a lightweight placeholder (mock). You can later replace it with a real GLB model.
