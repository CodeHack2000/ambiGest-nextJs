export default async function getBackendStatistic() {
    const backendData = {
        consume_last_month: 0,
        economy_percent: 0,
        total_consume: 0,
        total_invoices_value: 0,
        error: false
    }

    try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'water-readings/statistics'
        const token = localStorage.getItem('jwtToken')

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.status === 200) {
            const data = await response.json()

            backendData.consume_last_month = data.consume_last_month
            backendData.economy_percent = data.economy_percent
            backendData.total_consume = data.total_consume
            backendData.total_invoices_value = data.total_invoices_value
        } else if (response.status === 401) {
            backendData.error = true
        }
      } catch(error) {
            backendData.error = true
            console.log("Error: ", error)
      }

    return backendData
}