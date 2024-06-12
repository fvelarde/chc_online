// Get the container elements
const imageContainer = document.getElementById('image-container');
const calendarContainer = document.getElementById('calendar');

// GitHub API endpoint
const apiUrl = 'https://api.github.com/repos/fvelarde/chc_online/contents/plots';

// Fetch the contents of the plots folder
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Loop through the files and create image elements
        data.forEach(file => {
            if (file.type === 'file') {
                const img = document.createElement('img');
                img.src = file.download_url;
                img.alt = file.name;
                imageContainer.appendChild(img);
            }
        });

        // Create the calendar
        const calendar = document.createElement('div');
        calendar.className = 'calendar';

        // Loop through the files and create calendar elements
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
