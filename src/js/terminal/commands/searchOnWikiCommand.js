import searchOnCommandFactory from './searchOnCommandFactory';

export default searchOnCommandFactory({
  engine: 'Wikipedia',
  name: 'wiki',
  uri: 'https://pt.wikipedia.org/w/index.php',
  keyName: 'search',
});
