import _ from '../../underscore';

export default {
  name: 'time',
  response() {
    const date = new Date();
    const hours = _.padLeft(date.getHours(), 2);
    const minutes = _.padLeft(date.getMinutes(), 2);

    return `${hours}:${minutes}`;
  },
};
