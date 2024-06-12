// Get the container element
const calendarContainer = document.getElementById('calendar-container');

// Create the calendar
const calendar = document.createElement('div');
calendar.className = 'calendar';

// Loop through the files and create calendar elements
fetch('https://api.github.com/repos/fvelarde/chc_online/contents/plots')
    .then(response => response.json())
    .then(data => {
        data.forEach(file => {
            if (file.type === 'file') {
                const date = file.name.split('-');
                const year = date[0];
                const month = date[1];
                const day = date[2].split('.')[0];

                const calendarDate = document.createElement('div');
                calendarDate.className = 'calendar-date';
                calendarDate.textContent = `${year}-${month}-${day}`;
                calendar.appendChild(calendarDate);
            }
        });

        calendarContainer.appendChild(calendar);
    })
    .catch(error => console.error(error));
