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
            const url = `https://raw.githubusercontent.com/fvelarde/chc_online/main/plots/${fileName}`;
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Plot Image for ${dateStr}`;
            document.body.appendChild(img);
        },
    });
    calendar.render();
});
