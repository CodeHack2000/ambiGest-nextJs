export default async function handleLogout() {
    try {
      const token = localStorage.getItem('jwtToken')
      const baseUrl = process.env.DEV_BASE_URL
      const url = baseUrl + 'auth/logout'

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })

      if (response.status === 204) {
        localStorage.clear()
        return true
      }
    } catch (error) {
      console.log('Error: ', error)
    }

    return false
}