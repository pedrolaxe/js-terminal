import isFunction from '../core/isFunction';

const decorateMethod = (source, methodName, decorator) => {
  const descriptor = Object.getOwnPropertyDescriptor(source, methodName);
  const accessorName = descriptor.hasOwnProperty('get') ? 'get' : 'value';
  const method = descriptor[accessorName];
  const decorated = isFunction(method) ? decorator(method) : method;

  const newDescriptor = Object.assign({}, descriptor, {
    [accessorName]: decorated,
  });

  Object.defineProperty(source, methodName, newDescriptor);
  return source;
};

export default decorateMethod;
