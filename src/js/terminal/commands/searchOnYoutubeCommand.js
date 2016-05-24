import _ from '../../underscore';

export default {
  name: 'youtube',
  parameter: {
    name: 'search',
    messageIfMissing: 'Type youtube + something to search for.',
  },
  execute(search) {
    window.open(`https://www.youtube.com/results?search_query=${search}`, '_blank');
    return _.escape`<i>I\'ve searched on YouTube for <b>${search}</b> it should be opened now.</i>`;
  },
};
