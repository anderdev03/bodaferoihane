# 🎊 Boda Oihane & Fer

Web de invitación para la boda de Oihane y Fer.

## Stack

- **Astro** + **Tailwind CSS** v4
- **Google Apps Script** + **Google Sheets** (persistencia)
- JS vanilla para interactividad
- Deploy: Vercel / Netlify

## Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Dev server en `localhost:4321` |
| `npm run build` | Build producción a `./dist/` |
| `npm run preview` | Preview del build |

## Estructura

```
src/
├── components/   → Componentes (Hero, Location, RSVP, etc.)
├── layouts/      → Layout.astro
├── pages/        → index.astro (público), admin.astro (panel novios)
├── lib/          → gas-client.js, auth.js
└── styles/       → global.css (Tailwind)
```

## Estado

Ver `CONVERSACION.md` para el plan completo y estado actual.
