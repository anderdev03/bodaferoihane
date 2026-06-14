# Conversación: Web Boda Oihane & Fer

## Estado actual
**Fase 1 completada** (Setup: Astro + Tailwind + git + GitHub)
**Siguiente:** Fase 2 (Google Apps Script + Sheet)
**Última sesión:** 14 junio 2026

---

## Contexto
Webapp para la boda de Oihane & Fer. Web invitación con secciones.

## Stack
- **Framework**: Astro + Tailwind CSS v4
- **Persistencia**: Google Apps Script → Google Sheets (pendiente)
- **Interactividad**: JS vanilla (islas)
- **Deploy**: Vercel o Netlify con dominio `bodaferoihane.com`
- **Idioma**: Castellano
- **Estilo**: Blanco roto, elegante, minimalista, responsive móvil primero

## Funcionalidades acordadas

| Sección | Descripción |
|---------|-------------|
| Hero | Foto, nombres "Oihane & Fer", fecha, cuenta atrás |
| Ubicación | Foto del lugar, nombre, dirección |
| Itinerario | Mapa estático Tanzania minimalista + línea con puntos (nombre y hora) |
| Bus | Paradas: Pamplona (10:00), Noáin (10:15) |
| Música | Embed Spotify (placeholder) + textbox "Tu canción favorita" |
| Confirmación | Checkbox Sí/No, nombre, alergias (veggie/vegano/celiaco/otros con texto), bus sí/no |
| Footer | Frase genérica + "Confirma antes del 30 de septiembre" |
| Panel novios | Protegido: `admin_ander_2026` / `aA9493-ander-03`. Estadísticas: confirmados, alergias, bus, canciones |

## Datos pendientes de los novios
- [ ] Foto de portada (hero)
- [ ] Foto del lugar (venue)
- [ ] Enlace playlist Spotify
- [ ] Horarios definitivos del bus
- [ ] Frase definitiva del footer
- [ ] Mapa minimalista Tanzania (lo busca el dev)
- [ ] Textos/editores finales

## Plan de implementación
1. ✅ **Fase 1**: Setup (Astro + Tailwind + git + GitHub)
2. ⬜ **Fase 2**: Google Apps Script + hoja funcional
3. ⬜ **Fase 3**: Componentes estáticos
4. ⬜ **Fase 4**: Countdown interactivo
5. ⬜ **Fase 5**: Formulario RSVP conectado a GAS
6. ⬜ **Fase 6**: Panel novios (/admin)
7. ⬜ **Fase 7**: Diseño responsive, animaciones, pulido
8. ⬜ **Fase 8**: Dominio + deploy final

## Notas técnicas
- Cuenta GitHub personal: [anderdev03](https://github.com/anderdev03)
- Repo: `bodaferoihane`
- SSH personal: `~/.ssh/id_ed25519_github_personal`
- Node: v24.16.0 via nvm
- Comando dev: `npm run dev`
- Rama: `master`
