import isFunction from '../core/isFunction';

const invoke = (source, methodName, args = []) => {
  const method = source[methodName];
  return isFunction(method) ? source::method(...args) : method;
};

export default invoke;
