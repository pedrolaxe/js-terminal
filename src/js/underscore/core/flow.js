const flow = (...transformations) => {
  return value => {
    return transformations.reduce((tramsformed, transformation) => {
      return transformation(tramsformed);
    }, value);
  };
};

export default flow;
