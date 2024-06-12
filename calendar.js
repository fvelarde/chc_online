// Get the calendar table body
const calendarTableBody = document.getElementById('calendar').getElementsByTagName('tbody')[0];

// Get the plots folder files
const plotsFolder = 'plots/';
const files = [];

// Read the files in the plots folder
fetch(plotsFolder)
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const links = doc.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      const file = links[i].getAttribute('href');
      if (file.includes('.png')) {
        files.push(file);
      }
    }
    files.sort();
    populateCalendar();
  })
  .catch(error => console.error('Error:', error));

function populateCalendar() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let day = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < firstDay) {
        cell.textContent = '';
      } else if (day > daysInMonth) {
        break;
      } else {
        const dateString = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}.png`;
        const figureIndex = files.findIndex(file => file.includes(dateString));
        if (figureIndex !== -1) {
          const figureLink = `${plotsFolder}${files[figureIndex]}`;
          cell.innerHTML = `<a href="${figureLink}">${day}</a>`;
        } else {
          cell.textContent = day;
        }
        day++;
      }
      row.appendChild(cell);
    }
    calendarTableBody.appendChild(row);
  }
}
