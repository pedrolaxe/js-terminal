const decoratorExpression = transformation => {
  return (template, ...expressions) => {
    return template.reduce((acc, part, index) => {
      return acc + transformation(expressions[index - 1]) + part;
    });
  };
};

export default decoratorExpression;
