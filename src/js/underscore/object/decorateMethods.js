import _ from '../index';
import decorateMethod from './decorateMethod';

const decorateMethods = (source, mappings) => {
  return Object.keys(source).reduce((decorated, key) => {
    const decorator = mappings[key] || mappings[_] || _.identity;
    return decorateMethod(decorated, key, decorator);
  }, source);
};

export default decorateMethods;
