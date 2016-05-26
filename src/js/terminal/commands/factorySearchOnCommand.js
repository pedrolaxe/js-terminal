import _ from '../../underscore';

const factorySearchOnCommand = ({ engine, uri, name = engine.toLowerCase(), keyName = 'q' }) => {
  return {
    name,
    parameter: {
      name: 'search',
      messageIfMissing: `Type ${name} + something to search for.`,
    },
    execute(search) {
      window.open(`${uri}?${keyName}=${search}`, '_blank');
      return _.escape`<i>I\'ve searched on ${name} for <b>${search}</b> it should be opened now.</i>`;
    },
  };
};

export default factorySearchOnCommand;
