// Google Apps Script - Boda Oihane & Fer
// Copia este código en: Extensiones → Apps Script → pega y deploya

// Configuración
const ADMIN_TOKEN = 'aA9493-ander-03'

// POST: Recibe confirmaciones desde el formulario
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Confirmaciones')
    const alergiasStr = Array.isArray(data.alergias) ? data.alergias.join(', ') : (data.alergias || '')

    sheet.appendRow([
      new Date(),
      data.nombre,
      data.asiste,
      alergiasStr,
      data.otros_texto || '',
      data.bus,
      data.cancion || ''
    ])

    if (data.cancion && data.cancion.trim()) {
      const cancionesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Canciones')
      cancionesSheet.appendRow([new Date(), data.nombre, data.cancion])
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

// GET: Devuelve datos y estadísticas para el panel novios
function doGet(e) {
  try {
    const token = e.parameter.token
    if (token !== ADMIN_TOKEN) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON)
    }

    const spread = SpreadsheetApp.getActiveSpreadsheet()
    const confSheet = spread.getSheetByName('Confirmaciones')
    const confData = confSheet.getDataRange().getValues()
    const headers = confData[0] || []
    const confirmaciones = []
    for (let i = 1; i < confData.length; i++) {
      const row = confData[i]
      const obj = {}
      headers.forEach((h, idx) => { obj[h] = row[idx] })
      confirmaciones.push(obj)
    }

    const canSheet = spread.getSheetByName('Canciones')
    const canData = canSheet.getDataRange().getValues()
    const canHeaders = canData[0] || []
    const canciones = []
    for (let i = 1; i < canData.length; i++) {
      const row = canData[i]
      const obj = {}
      canHeaders.forEach((h, idx) => { obj[h] = row[idx] })
      canciones.push(obj)
    }

    const total = confirmaciones.length
    const asisten = confirmaciones.filter(r => String(r.asiste || '').toUpperCase() === 'SI').length
    const noAsisten = confirmaciones.filter(r => String(r.asiste || '').toUpperCase() === 'NO').length
    const bus = confirmaciones.filter(r => String(r.bus || '').toUpperCase() === 'SI').length

    const alergiasCount = {}
    confirmaciones.forEach(r => {
      const al = r.alergias
      if (al) {
        String(al).split(', ').forEach(a => {
          const key = a.trim()
          if (key) alergiasCount[key] = (alergiasCount[key] || 0) + 1
        })
      }
    })

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        data: { confirmaciones, canciones, stats: { total, asisten, noAsisten, bus, alergiasCount } }
      }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
