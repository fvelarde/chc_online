document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            const dateStr = info.dateStr;
            const dateParts = dateStr.split('-');
            const year = dateParts[0];
            const month = dateParts[1];
            const day = dateParts[2];
            const fileName = `${year}-${month}-${day}.png`;
            const url = `https://api.github.com/repos/fvelarde/chc_online/contents/plots/${fileName}`;
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Plot Image for ${dateStr}`;
            document.body.appendChild(img);
        },
        plugins: ['interaction'],
        dayClick: function(date, jsEvent, view) {
            if (date.format() === '2023-08-29') {
                return false;
            }
        },
    });
    calendar.render();
});
