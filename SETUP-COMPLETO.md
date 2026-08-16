# 🌐 Boda Oihane & Fer — Guía Completa de Configuración

> **Documento único de referencia.** Todo lo que necesitas saber sobre dónde está cada cosa.
> Si clonas en otro PC, sigue la sección "Poner en marcha en un PC nuevo".

---

## 🗺️ Mapa de servicios (qué es cada cosa)

| Servicio | Qué es | Acceso | Quién lo gestiona |
|----------|--------|--------|-------------------|
| **GitHub** | Repositorio del código | `github.com/anderdev03/bodaferoihane` | Cuenta personal `anderdev03` |
| **Vercel** | Alojamiento de la web (deploy) | `vercel.com` | Cuenta personal (importada desde GitHub) |
| **Google Sheets** | Base de datos (confirmaciones) | `sheets.google.com` | Tu cuenta de Google personal |
| **Google Apps Script** | API que conecta la web con el Sheet | `script.google.com` | Tu cuenta de Google personal |
| **Dominio** | `bodaferoihane.com` (pendiente de comprar) | — | — |

---

## 🖥️ El PC actual (este proyecto)

### Sistema
- **WSL2 Debian 13** + **Windows**
- **Node.js v24.16.0** (via **nvm** — instalado en `~/.nvm`)
- **npm v11.13.0**

### Repositorio local
- Ruta: `/home/ander/code_repos/boda_fo`
- Remoto: `git@github.com:anderdev03/bodaferoihane.git` (SSH)
- Rama: `master`

### Git / SSH
- **Usuario git local** (configurado en el repo, no global): `anderdev03` / `anderayesa3@gmail.com`
- **Clave SSH personal**: `~/.ssh/id_ed25519_github_personal` (pública en GitHub bajo anderdev03)
- **Clave SSH de empresa**: `~/.ssh/id_ed25519` (NO usar para este proyecto)
- **SSH config**: `~/.ssh/config` tiene un bloque que usa la clave personal para `github.com`

⚠️ **Importante**: En cada terminal nueva, el agente SSH hay que reiniciarlo:
```bash
eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519_github_personal
```
(No hay secretos en el código: se usa SSH key, no token)

---

## 🔑 Variables de entorno (`.env`)

Archivo **`.env`** en la raíz del proyecto (NO subido a GitHub, está en `.gitignore`):

```
PUBLIC_GAS_URL=https://script.google.com/macros/s/AKfycbx9a0Um6R2yN2yRPqLkcvtn07WbXjXYKeITKiRI2Wvksp429gws0jXQGRDPuNTZDH2PiA/exec
```

Esta es la URL del **Google Apps Script** (la "API" de la web).

---

## 🛠️ Google Apps Script + Sheets

### El Sheet (base de datos)
- **Nombre**: Boda Oihane & Fer
- **Hojas**:
  - `Confirmaciones` → columnas: `timestamp | nombre | asiste | alergias | otros_texto | bus`
- **Acceso**: solo tu cuenta personal (NO es público)
- El código fuente del script está en el repo: `gas-script.gs`

### El Apps Script
- Se edita desde: el Sheet → **Extensiones → Apps Script**
- Se despliega como **Web App**:
  - Execute as: `Me`
  - Who has access: `Anyone`
- La URL resultante es la que va en `.env` → `PUBLIC_GAS_URL`

### Seguridad del panel
- **Usuario**: `admin_ander_2026` (hardcodeado, readonly en el login)
- **Contraseña**: `aA9493-ander-03` (está en `src/components/Stats.astro` y en `gas-script.gs` como `ADMIN_TOKEN`)

⚠️ **Si cambias la contraseña**, cámbiala en **DOS sitios**:
1. `src/components/Stats.astro` → `const ADMIN_PASS`
2. `gas-script.gs` → `const ADMIN_TOKEN`

---

## 🚀 Deploy (Vercel)

### Cómo se desplegó
1. Cuenta Vercel creada conectada a GitHub (`anderdev03`)
2. Importado el repo `bodaferoihane`
3. Framework detectado automáticamente: **Astro**
4. Se añadió la variable de entorno en Vercel:
   - `PUBLIC_GAS_URL` = la URL del Apps Script
5. Deploy exitoso → URL pública tipo `bodaferoihane-xxxx.vercel.app`

### Estado actual
- El deploy fue **pausado/desactivado** temporalmente (según pediste)
- Para reactivarlo: Vercel → proyecto → **Deployments** → desplegar la última versión

### Notas importantes
- **Vercel redirige con el código en GitHub**: cada `git push` a `master` relanza el build automáticamente
- Para añadir el dominio `bodaferoihane.com`: Vercel → Project → **Settings → Domains**
- El dominio aún **no está comprado** (pendiente)

---

## ⚙️ Comandos útiles (en el proyecto)

```bash
npm run dev          # servidor local en http://localhost:4321
npm run build        # build de producción a ./dist/
npm run preview      # previsualizar el build
```

---

## 💻 Poner en marcha en un PC NUEVO

### 1. Requisitos
- Node.js 22+ (recomendado: nvm → `nvm install --lts`)
- git
- La clave SSH personal (`id_ed25519_github_personal`) + añadirla a GitHub
- (Opcional) Vercel CLI o login por web

### 2. Clonar y configurar git
```bash
git clone git@github.com:anderdev03/bodaferoihane.git
cd bodaferoihane
git config user.name "anderdev03"
git config user.email "anderayesa3@gmail.com"
```

### 3. Configurar SSH (si no tienes la clave)
```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_github_personal -C "github-personal"
eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519_github_personal
# Añadir la pública (~/.ssh/id_ed25519_github_personal.pub) a GitHub:
#   github.com → Settings → SSH and GPG keys → New SSH key
```

### 4. Instalar dependencias y crear `.env`
```bash
npm install
cp .env.example .env
# Editar .env y pegar la PUBLIC_GAS_URL (la tienes arriba)
```

### 5. Arrancar
```bash
npm run dev
```

### 6. Deploy (si toca)
- Desde Vercel web: simplemente sincroniza el repo
- O CLI: `npm i -g vercel && vercel`

---

## 📋 Checklist de pendientes de la boda

- [ ] **Foto de portada** (Hero) — reemplazar placeholder en `src/components/Hero.astro`
- [ ] **Foto del lugar** (Location) — reemplazar placeholder en `src/components/Location.astro`
- [ ] **Playlist de Spotify** — pendiente de decidir (por ahora no hay sección de música)
- [ ] **Horarios definitivos del bus** — editar `src/components/BusSection.astro`
- [ ] **Frase definitiva del footer** — editar `src/components/Footer.astro`
- [ ] **Dominio** `bodaferoihane.com` — comprar y añadir en Vercel → Settings → Domains
- [ ] **Lugar/ceremonia/ubicación** — editar `src/pages/index.astro` (nombre y dirección)
- [ ] **Fecha de la boda** — editar `src/pages/index.astro` (hoy: 10 oct 2026)

---

## 🔧 Dónde editar cada cosa en el código

| Qué quieres cambiar | Archivo |
|---------------------|---------|
| Nombres, fecha, subtítulo | `src/pages/index.astro` |
| Cuenta atrás (fecha objetivo) | `src/pages/index.astro` (`targetDate`) |
| Lugar + dirección | `src/pages/index.astro` |
| Itinerario del día (horas/actos) | `src/components/Itinerary.astro` |
| Paradas de bus + horas | `src/components/BusSection.astro` |
| Frase footer + límite confirmación | `src/components/Footer.astro` |
| Formulario (campos) | `src/components/RsvpForm.astro` |
| Panel novios (estadísticas) | `src/components/Stats.astro` |
| Colores / fuentes | `src/styles/global.css` |
| Lógica del API Google | `gas-script.gs` |
| URL del API | `.env` → `PUBLIC_GAS_URL` |
