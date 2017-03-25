import _ from '../underscore';

const transformResponse = response => {
  if (_.isArray(response)) {
    return () => response.join('<br>');
  }

  if (typeof response === 'string') {
    return () => response;
  }

  return response || _.noop;
};

const decorateExecute = execute => {
  return function (param) {
    if (param === '' && this.parameter) {
      return this.parameter.messageIfMissing;
    }

    return execute(param);
  };
};

const commandDecorator = ({
    name = '',
    aliases = [],
    parameter = null,
    response = null,
    execute = transformResponse(response),
}) => {
  const aliasesAndName = aliases.concat([name]);
  execute = decorateExecute(execute);

  return { name, aliases, aliasesAndName, parameter, execute };
};

export default commandDecorator;
