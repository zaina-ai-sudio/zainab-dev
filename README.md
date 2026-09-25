# Zainab Gul — Portfolio Website

Full-stack animated portfolio: **React.js** (frontend) + **Node.js/Express** (backend) + **MySQL** (database, contact form messages store karne ke liye).

## Folder structure

```
zainab-portfolio/
├── frontend/     → React + Vite + Tailwind + Framer Motion
└── backend/      → Node.js + Express + MySQL
```

## Setup — step by step (Roman Urdu mein)

### 1) MySQL database banayein

Pehle MySQL server chalayein (XAMPP/WAMP/Laragon ya standalone MySQL), phir:

```bash
mysql -u root -p < backend/sql/schema.sql
```

Ye `zainab_portfolio` database aur `contact_messages` table bana dega.

### 2) Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

`.env` file kholein aur apni MySQL credentials daal dein (agar root user ka password hai to wo bhi). Phir server start karein:

```bash
npm run dev
```

Backend `http://localhost:5000` pe chalega. Test karne ke liye browser mein `http://localhost:5000` khol kar dekhein — `{status: "ok"}` dikhna chahiye.

### 3) Frontend setup

Naye terminal mein:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend `http://localhost:5173` pe khul jayega.

### 4) Test karein

Portfolio site kholein, contact form fill karein aur submit karein — message MySQL ke `contact_messages` table mein save ho jayega. Check karne ke liye:

```sql
USE zainab_portfolio;
SELECT * FROM contact_messages;
```

## Customize kaise karein

- **Content (naam, skills, projects, experience waghera):** `frontend/src/data/portfolioData.js` file edit karein — sab kuch yahan se control hota hai.
- **Colors/theme:** `frontend/tailwind.config.js` mein `colors` section change karein.
- **Profile picture:** Abhi "ZG" initials ka animated avatar hai (`Hero.jsx` mein). Agar apni asal photo lagani ho, to `frontend/public/` mein image daal kar `Hero.jsx` mein `<img>` tag se replace kar dein.

## Deploy karne ke liye (future)

- **Frontend:** Vercel ya Netlify pe free deploy ho sakta hai (`npm run build` se `dist/` folder banega).
- **Backend + MySQL:** Railway, Render, ya koi VPS use kar sakte hain jahan Node aur MySQL dono host ho sakein.
