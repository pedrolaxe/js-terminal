import _ from '../../underscore';

export default {
  name: 'google',
  parameter: {
    name: 'search',
    messageIfMissing: 'Type google + something to search for.',
  },
  execute(search) {
    window.open(`https://www.google.com.br/search?q=${search}`, '_blank');
    return _.escape`<i>I\'ve searched on Google for <b>${search}</b> it should be opened now.</i>`;
  },
};
