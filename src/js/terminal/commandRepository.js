import _ from '../underscore';
import commandDecorator from './commandDecorator';

const decorateCommands = commands => Array.from(commands).map(commandDecorator);

const create = _.flow(decorateCommands, commands => {
  const findByCommandText = commandText => {
    const finder = command => {
      const { aliasesAndName, parameter } = command;

      if (parameter) {
        return aliasesAndName.find(::commandText.startsWith);
      }

      return aliasesAndName.includes(commandText);
    };

    return commands.find(finder);
  };

  return { findByCommandText };
});

export default { create };
