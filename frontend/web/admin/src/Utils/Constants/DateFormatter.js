class DateFormatter {
  formatDate(date) {
    const dateObject = new Date(date)
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true, // Use 24-hour format
    }
    return this.formatedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject)
  }
  getDayz(date) {
    const currentDate = new Date()
    const givendDate = new Date(date)

    const timeDiffernce = currentDate - givendDate
    const daysDiffernce = Math.floor(timeDiffernce / (1000 * 60 * 60 * 24))
    return daysDiffernce
  }
  
}

export default DateFormatter = new DateFormatter()