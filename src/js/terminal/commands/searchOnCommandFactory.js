import _ from '../../underscore';

const searchOnCommandFactory = ({ engine, uri, name = engine.toLowerCase(), keyName = 'q' }) => {
  return {
    name,
    parameter: {
      name: 'search',
      messageIfMissing: `Type ${name} + something to search for.`,
    },
    execute(search) {
      window.open(`${uri}?${keyName}=${search}`, '_blank');
      return _.escape`<i>I\'ve searched on ${name} for <b>${search}</b> see results.</i>`;
    },
  };
};

export default searchOnCommandFactory;
