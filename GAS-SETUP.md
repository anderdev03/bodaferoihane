# Configuración Google Apps Script + Sheet

## 1. Crear Google Sheet

1. Ve a https://sheets.new
2. Crea dos hojas (sheets) con estos nombres exactos:
   - `Confirmaciones`
   - `Canciones`

### Hoja "Confirmaciones" (columnas):
| timestamp | nombre | asiste | alergias | otros_texto | bus | cancion |
|-----------|--------|--------|----------|-------------|-----|---------|

### Hoja "Canciones" (columnas):
| timestamp | nombre | artista_cancion |
|-----------|--------|-----------------|

Puedes copiar esta fila en la primera fila de cada hoja.

## 2. Crear Apps Script

1. En el Sheet, ve a **Extensiones → Apps Script**
2. Se abrirá el editor. Copia el contenido de `gas-script.gs` y pégalo
3. Guarda el proyecto (Ctrl+S) — ponle nombre "Boda Oihane & Fer"

## 3. Desplegar Web App

1. En el editor, haz clic en **Deploy → New deployment**
2. Tipo: **Web app**
3. Configura:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Haz clic en **Deploy**
5. **Copia la URL** que aparece (algo como `https://script.google.com/macros/s/XXX/exec`)

## 4. Configurar en el proyecto

1. En la raíz del proyecto, crea un archivo `.env` (copia de `.env.example`):
   ```
   PUBLIC_GAS_URL=https://script.google.com/macros/s/LA-URL-QUE-COPIAS-TE/exec
   ```
2. ¡Listo! El formulario ya enviará datos al Sheet.

## Notas

- El **panel novios** (`/admin`) usa el token `aA9493-ander-03` para autenticarse contra el GET del API
- Si cambias la contraseña del panel, actualízala también en `ADMIN_TOKEN` dentro de `gas-script.gs`
- Para probar, abre el Sheet y verás aparecer las filas al enviar el formulario
