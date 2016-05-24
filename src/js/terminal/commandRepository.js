import CommandDecorator from './commandDecorator';

const data = [];

const register = commands => {
  for (const command of commands) {
    const decorated = CommandDecorator.decorate(command);
    data.push(decorated);
  }
};

const findByCommandText = commandText => {
  const finder = command => {
    const { aliasesAndName, parameter } = command;

    if (parameter) {
      return !!aliasesAndName.find(aliasOrName => commandText.indexOf(aliasOrName) === 0);
    }

    return aliasesAndName.indexOf(commandText) !== -1;
  };

  return data.find(finder);
};

export default { register, findByCommandText };
