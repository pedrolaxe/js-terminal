import _ from '../../underscore';

export default {
  name: 'open',
  parameter: {
    name: 'link',
    messageIfMissing: 'Type open + something to navigate.',
  },
  execute(link) {
    window.open(`http://${link.toLowerCase()}`, '_blank');
    return _.escape`<i>The URL <b>${link}</b> should be opened now.</i>`;
  },
};
