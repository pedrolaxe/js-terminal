import toStringTag from './toStringTag';

const isArray = arg => toStringTag(arg) === '[object Array]';

export default isArray;
