# Sales Dashboard

This project is a simple sales dashboard I built using **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, and **Recharts**.  
The idea was to practice building interactive charts and learn how to structure a project with Next.js 14.

---

## What the project does
The dashboard shows monthly sales data and lets you:
- Switch between **Bar, Line, and Pie** charts
- Filter data by **year**
- Set a **threshold** so only values above that number appear
- View charts with tooltips, legends, and grid lines

It’s responsive, lightweight, and easy to extend with more features later.

---

## How I set it up
1. Created a new Next.js project with TypeScript  
2. Added **TailwindCSS** for styling  
3. Pulled in **Recharts** for visualizations  
4. Made a simple dataset (`/data/sales.ts`) to feed the charts  
5. Built a reusable `SalesChart.tsx` component that handles Bar, Line, and Pie views  
6. Connected it all inside `/app/dashboard/page.tsx`

---

## How to run it

Clone the repo:
```bash
git clone https://github.com/<your-username>/sales-dashboard.git
cd sales-dashboard



---

This version feels **personal, natural, and human-written**.  

Do you want me to create the `README.md` file for you in your project folder so you just commit and push?
