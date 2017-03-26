const flow = (...transformations) => {
  return value => {
    return transformations.reduce((transformed, transformation) => {
      return transformation(transformed);
    }, value);
  };
};

export default flow;
