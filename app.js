const date = new Date();

const renderCalendar = () => {
  //calendar header
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = date.getMonth();
  document.querySelector('.calendar header .mes').innerHTML = monthList[month];
  document.querySelector('.fecha').innerHTML = date.toDateString();

  //calendar main
  const datesContainer = document.querySelector('.dates');
  let days = '';
  const firstDateOfCurrentMonthIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const lastDateOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const lastDateOfCurrentMonthIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const lastDateOfPrevMonth = new Date(
    date.getUTCFullYear(),
    date.getMonth(),
    0
  ).getDate();

  //prev month dates
  for (let i = firstDateOfCurrentMonthIndex; i > 0; i--) {
    days += `<div class="prev-date">${lastDateOfCurrentMonth + 1 - i}</div>`;
  }
  //current month dates
  for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
    const condition =
      i === new Date().getDate() && date.getMonth() === new Date().getMonth();
    condition
      ? (days += `<div class="today">${i}</div>`)
      : (days += `<div>${i}</div>`);
  }
  //next month dates
  console.log(lastDateOfCurrentMonthIndex);
  for (let i = 1; i <= 6 - lastDateOfCurrentMonthIndex; i++) {
    days += `<div class="next-date">${i}</div>`;
  }

  datesContainer.innerHTML = days;
};
document.querySelector('.prev-btn').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector('.next-btn').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
