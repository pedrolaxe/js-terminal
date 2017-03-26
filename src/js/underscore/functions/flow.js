const flow = (...funcs) => {
  return value => {
    return funcs.reduce((currentValue, func) => {
      return func(currentValue);
    }, value);
  };
};

export default flow;
