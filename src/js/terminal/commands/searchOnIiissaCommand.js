import _ from '../../underscore';

export default {
  name: 'iiissa',
  parameter: {
    name: 'search',
    messageIfMissing: 'Type iiissa + something to search for.',
  },
  execute(search) {
    window.open(`https://iiissa.com.br/buscar?q=${search}&tipo=emp`, '_blank');
    return _.escape`<i>I\'ve searched on IIISSA for <b>${search}</b> it should be opened now.</i>`;
  },
};
