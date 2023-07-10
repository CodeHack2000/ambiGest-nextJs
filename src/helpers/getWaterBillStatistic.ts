import dayjs from "dayjs"

export default async function getUserWaterBillStatistic() {
    const waterBillStatistic = {
        totalMoney: 0,
        bigestPayMonth: "",
        error: false
    }

    try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'water-bill-invoice'
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
            const newDataset: InvoicesBillType[] = data.map((item: any) => ({
                consumption: item.consumption,
                increase: item.increased_amount,
                total: item.billing_value,
                date: dayjs(item.invoice_date).format('MMMM'),
                id: item._id
            }))

            waterBillStatistic.totalMoney = newDataset.reduce((accumulator, bill) => accumulator + bill.total, 0)

            let monthTotal: { [month: string]: number } = {}

            newDataset.forEach((bill) => {
                if (monthTotal[bill.date]) {
                monthTotal[bill.date] += bill.total;
                } else {
                monthTotal[bill.date] = bill.total;
                }
            });

            let maxMonth = "";
            let maxMonthTotal = 0;

            for (const month in monthTotal) {
                if (monthTotal[month] > maxMonthTotal) {
                maxMonthTotal = monthTotal[month];
                maxMonth = month;
                }
            }

            waterBillStatistic.bigestPayMonth = maxMonth + ": " + maxMonthTotal + " €"
            
        } else if (response.status === 401) {
            waterBillStatistic.error = true
        } else if (response.status === 404) {
            waterBillStatistic.error = true
        }
    } catch (error) {
        console.log('Error: ', error)
        error = true
    }

    return waterBillStatistic
  }