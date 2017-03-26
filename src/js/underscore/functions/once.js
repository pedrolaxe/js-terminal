const once = func => {
  let called = false;
  let result = null;

  return function () {
    if (called) {
      return result;
    }

    result = this::func();
    called = true;
    return result;
  };
};

export default once;
