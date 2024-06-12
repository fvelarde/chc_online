document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Plot Image',
                start: '2022-01-01',
                end: '2022-01-31',
                url: 'https://raw.githubusercontent.com/fvelarde/chc_online/main/plots/2022-01-01.png',
            },
            {
                title: 'Plot Image',
                start: '2022-02-01',
                end: '2022-02-28',
                url: 'https://raw.githubusercontent.com/fvelarde/chc_online/main/plots/2022-02-01.png',
            },
            // Add more events here
        ],
    });
    calendar.render();
});
