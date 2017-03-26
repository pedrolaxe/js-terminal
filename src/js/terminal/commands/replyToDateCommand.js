import _ from '../../underscore';

export default {
  name: 'date',
  response() {
    const date = new Date();
    const day = _.padLeft(date.getDate(), 2);
    const month = _.padLeft(date.getMonth() + 1, 2);
    const fullYear = date.getFullYear();

    return `${day}/${month}/${fullYear}`;
  },
};
