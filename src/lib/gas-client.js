const GAS_URL = import.meta.env.PUBLIC_GAS_URL

export async function submitRSVP(data) {
  const response = await fetch(GAS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(data)
  })
  return { success: true }
}

export async function getAdminData(token) {
  const url = `${GAS_URL}?token=${encodeURIComponent(token)}`
  const response = await fetch(url)
  return response.json()
}
