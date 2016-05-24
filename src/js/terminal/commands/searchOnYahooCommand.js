import _ from '../../underscore';

export default {
  name: 'yahoo',
  parameter: {
    name: 'search',
    messageIfMissing: 'Type yahoo + something to search for.',
  },
  execute(search) {
    window.open(`https://br.search.yahoo.com/search?p=${search}`, '_blank');
    return _.escape`<i>I\'ve searched on Yahoo for <b>${search}</b> it should be opened now.</i>`;
  },
};
