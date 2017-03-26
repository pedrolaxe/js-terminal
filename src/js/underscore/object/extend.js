import copyProperty from './copyProperty';

const extend = (target, ...sources) => {
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      copyProperty(target, source, key);
    });
  });

  return target;
};

export default extend;
