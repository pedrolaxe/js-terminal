import _ from '../../underscore';

export default {
  name: 'time',
  response() {
    const timeAndDate = new Date();
    const timeHours = _.padLeft(timeAndDate.getHours(), 2);
    const timeMinutes = _.padLeft(timeAndDate.getMinutes(), 2);

    return `${timeHours}:${timeMinutes}`;
  },
};
