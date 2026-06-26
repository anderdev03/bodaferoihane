# Cosas que tienes que hacer en Google (te explico, no es código):

## 1. Crear el Google Sheet
- Ve a https://sheets.new
- Pon nombres a las hojas (pestañas de abajo):
  - **Hoja 1**: `Confirmaciones`
  - **Hoja 2`: `Canciones`
- En **Confirmaciones**, fila 1 pon: `timestamp`, `nombre`, `asiste`, `alergias`, `otros_texto`, `bus`, `cancion`
- En **Canciones**, fila 1 pon: `timestamp`, `nombre`, `artista_cancion`

## 2. Añadir el script
1. En el Sheet: Extensiones → Apps Script
2. Borra lo que venga y pega el código de `gas-script.gs` (está en la carpeta del proyecto)
3. Guarda (Ctrl+S) — ponle nombre "Boda Oihane & Fer"

## 3. Publicar la web app
1. En el editor de Apps Script: Deploy → New deployment
2. Tipo: Web app
3. Execute as: `Me`
4. Who has access: `Anyone`
5. Deploy → te da una URL

## 4. Copiar URL al proyecto
1. En la carpeta del proyecto, crea un archivo `.env` con:
   PUBLIC_GAS_URL=LA_URL_QUE_TE_HA_DADO
2. (No lo subas a GitHub — ya está en .gitignore)

---

¿Tienes esto hecho? Dime cuando lo hayas hecho y seguimos con los componentes (Fase 3).
