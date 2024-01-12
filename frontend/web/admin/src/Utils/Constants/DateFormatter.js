class DateFormatter{
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
        return this.formatedDate = new Intl.DateTimeFormat('en-US',options).format(dateObject)
    }
}

export default DateFormatter = new DateFormatter()