import toStringTag from './toStringTag';

const isFunction = value => toStringTag(value) === '[object Function]';

export default isFunction;
