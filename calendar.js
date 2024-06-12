// Get the calendar table
const calendarTable = document.getElementById('calendar');

// Get the plots folder files
const plotsFolder = 'plots';
const files = [];
const fileReader = new FileReader();
fileReader.onload = function(event) {
  const filesString = event.target.result;
  const filesArray = filesString.split('\n');
  filesArray.forEach(file => {
    if (file.includes('.png')) {
      files.push(file);
    }
  });
  files.sort((a, b) => {
    const dateA = new Date(a.replace('.png', ''));
    const dateB = new Date(b.replace('.png', ''));
    return dateA - dateB;
  });
  populateCalendar();
};
fileReader.readAsText(new Blob([fs.readdirSync(plotsFolder).join('\n')]), 'text/plain');

function populateCalendar() {
  files.forEach((file, index) => {
    const date = new Date(file.replace('.png', ''));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}.png`;
    const dayElement = calendarTable.rows[month - 1].cells[day];
    if (dayElement) {
      dayElement.innerHTML = `<a href="${dayString}">${day}</a>`;
    }
  });
}
