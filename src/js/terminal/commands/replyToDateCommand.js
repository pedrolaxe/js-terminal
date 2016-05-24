export default {
  name: 'date',
  response() {
    const timeAndDate = new Date();
    const dateDay = timeAndDate.getDate();
    const dateMonth = timeAndDate.getMonth() + 1;
    const dateYear = timeAndDate.getFullYear();

    return `${dateDay}/${dateMonth}/${dateYear}`;
  },
};
