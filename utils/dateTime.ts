
export function publishDisplayTime(publishDate:Date){
    const date = publishDate.getTime()
    const monthName = publishDate.toLocaleDateString("en-GB", {month:"long"})
    const asMinutes = Math.floor((Date.now() - date)/1000/60)
     const asHours = Math.floor((Date.now() - date)/1000/60/60)
     const remainingMinutes = asMinutes-asHours*60 > 0? 
                              `${asMinutes-asHours*60} min`
                              : ''
     const remainingHours = asHours > 1? `${asHours} hrs`:`${asHours} hr`
    //  const asDays = Math.floor((Date.now() - date)/1000/60/60/24)
     const lessThanHalfADayAgo = Math.floor((Date.now() - date)/1000/60/60) <= 12
     const lessThanAnHourAgo = Math.floor((Date.now() - date)/1000/60) <= 60
     
     if(lessThanAnHourAgo){
          return `${asMinutes} min ago`
     }
     if(lessThanHalfADayAgo){
          return `${remainingHours} ${remainingMinutes} ago`
      }
      return `${monthName} ${publishDate.toLocaleDateString("en-GB", {day: "2-digit"})}  at ${publishDate.toLocaleTimeString("en-GB", {hour12: true, hour:"2-digit", minute:"2-digit"})}`
}