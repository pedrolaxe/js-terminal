import _ from '../underscore';

const commandBase = {
  name: '',
  aliases: [],
  parameter: null,
  response: null,
  execute() {
    const response = _.invoke(this, 'response');
    return _.flatten([response]).join('<br>');
  },
  get aliasesAndName() {
    return this.aliases.concat([this.name]);
  },
};

const decorateExecute = execute => {
  return function (param) {
    if (param === '' && this.parameter) {
      return this.parameter.messageIfMissing;
    }

    return this::execute(param);
  };
};

const commandDecorator = command => {
  const decorated = _.extend({}, commandBase, command);

  return _.decorateMethods(decorated, {
    [_]: _.once,
    execute: decorateExecute,
  });
};

export default commandDecorator;
