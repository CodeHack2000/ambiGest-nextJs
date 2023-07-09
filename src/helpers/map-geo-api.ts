// NÃO ESTOU A CONSEGUIR USAR O .env
export async function getGeocodeByAddress(searchQuery: string) {
    const API_KEY = process.env.GEOCODE_API_KEY

    const body = {
        "location": searchQuery,
        "options": {
            "thumbMaps": false
        }
    }

    const params = `?key=${API_KEY}`
    const url = 'https://www.mapquestapi.com/geocoding/v1/address' + params

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data = (await res.json()) as {error?: string}
    if (data.error)
        throw new Error(data.error)

    return data
}