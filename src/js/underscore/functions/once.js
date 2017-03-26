const once = func => {
  let called = false;
  let result = null;

  return function (...args) {
    if (called) {
      return result;
    }

    result = this::func(...args);
    called = true;
    return result;
  };
};

export default once;
