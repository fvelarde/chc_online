const datepicker = document.getElementById('some-id');
const picker = datepicker ? datepicker : null;

if (picker) {
    const datepickerOptions = {
        onSelect: instance => {
            console.log(`Selected date: ${instance.dateSelected}`);
        },
        onShow: instance => {
            console.log('Calendar showing.');
        },
        onHide: instance => {
            console.log('Calendar hidden.');
        },
        onMonthChange: instance => {
            console.log(`Month changed to ${instance.currentMonthName}`);
        },
        formatter: (input, date, instance) => {
            input.value = date.toDateString();
        },
        position: 'tr',
        startDay: 1,
        customDays: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
        customMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        customOverlayMonths: ['😀', '😂', '😎', '😍', '🤩', '😜', '😬', '😳', '🤪', '🤓 ', '😝', '😮'],
        alwaysShow: true,
        dateSelected: new Date(),
        maxDate: new Date(2099, 0, 1),
        minDate: new Date(2016, 5, 1),
        startDate: new Date(),
        showAllDates: true,
        noWeekends: true,
    };

    const datepickerInstance = datepicker.datepicker(picker, datepickerOptions);
}
