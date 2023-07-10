import dayjs from "dayjs"

export default async function getSchedulesStatistic() {
    const schedulesStatistics = {
      totalSchedules: 0,
      mostSchedulesMonth: "",
      mostScheduledType: "",
      error: false
    }

    try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'waste-collection'
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
            const newDataset: SchedulesDatasetType[] = data.map((item: any) => ({
                type: item.type,
                latitude: item.latitude,
                longitude: item.longitude,
                pickup_at: item.pickup_at,
                time_of_day: item.time_of_day,
                id: item._id,
                color: ""
            }))

            schedulesStatistics.totalSchedules = newDataset.length

            const monthCounts: { [month: string]: number } = {};
            const typeCounts: { [type: string]: number } = {};

            newDataset.forEach((schedule) => {
              const scheduleDate = dayjs(schedule.pickup_at);
              const monthKey = `${scheduleDate.month() + 1}-${scheduleDate.year()}`;

              if (monthCounts[monthKey]) {
                monthCounts[monthKey]++;
              } else {
                monthCounts[monthKey] = 1;
              }

              if (typeCounts[schedule.type]) {
                typeCounts[schedule.type]++;
              } else {
                typeCounts[schedule.type] = 1;
              }
            });

            let maxMonth = "";
            let maxMonthCount = 0;
            for (const monthKey in monthCounts) {
              if (monthCounts[monthKey] > maxMonthCount) {
                maxMonthCount = monthCounts[monthKey];
                maxMonth = monthKey;
              }
            }

            schedulesStatistics.mostSchedulesMonth = maxMonth

            let maxType = "";
            let maxTypeCount = 0;
            for (const type in typeCounts) {
              if (typeCounts[type] > maxTypeCount) {
                maxTypeCount = typeCounts[type];
                maxType = type;
              }
            }
            
            schedulesStatistics.mostScheduledType = maxType      
        } else if (response.status === 401) {
            schedulesStatistics.error = true
        }
      } catch(error) {
          error = true
          console.log("Error: ", error)
      }

    return {
        totalSchedules: schedulesStatistics.totalSchedules,
        mostSchedulesMonth: schedulesStatistics.mostSchedulesMonth,
        mostScheduledType: schedulesStatistics.mostScheduledType,
        error: schedulesStatistics.error
    }
  }