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
    formatDateOnly(date) {
        const dateString = date;
        const parsedDate = new Date(dateString);
        
        if (!isNaN(parsedDate)) {
          const options = { day: 'numeric', month: 'short', year: 'numeric' };
          const formattedDate = parsedDate.toLocaleDateString('en-US', options);
        
          // Add ordinal suffix to the day
          const dayWithOrdinal = addOrdinalSuffix(parsedDate.getDate());
        
          console.log(`${dayWithOrdinal} ${formattedDate}`);
        } else {
          console.error('Invalid date string format');
        }
        
        // Function to add ordinal suffix to the day
        function addOrdinalSuffix(day) {
          if (day >= 11 && day <= 13) {
            return `${day}th`;
          }
          switch (day % 10) {
            case 1:
              return `${day}st`;
            case 2:
              return `${day}nd`;
            case 3:
              return `${day}rd`;
            default:
              return `${day}th`;
          }
        }
    }
}

export default DateFormatter = new DateFormatter()