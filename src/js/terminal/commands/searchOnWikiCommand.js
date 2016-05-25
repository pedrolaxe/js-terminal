import _ from '../../underscore';

export default {
  name: 'wiki',
  parameter: {
    name: 'search',
    messageIfMissing: 'Type wiki + something to search for.',
  },
  execute(search) {
    window.open(`https://pt.wikipedia.org/w/index.php?search=${search}`, '_blank');
    return _.escape`<i>I\'ve searched on Wikipedia for <b>${search}</b> it should be opened now.</i>`;
  },
};
