import toStringTag from './toStringTag';

const isArray = value => toStringTag(value) === '[object Array]';

export default isArray;
