export default async function getUser() {
    const token = localStorage.getItem('jwtToken')
    const baseUrl = process.env.DEV_BASE_URL
    const url = baseUrl + 'user/me'

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    if (response.status === 200) {
      const user = await response.text()
      return user
    } else {
      localStorage.clear()
      return ""
    }
}