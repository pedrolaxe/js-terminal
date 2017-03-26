import Terminal from '../terminal/terminal';
import commandRepositoryFactory from '../terminal/commandRepositoryFactory';

const terminalFactory = () => {
  return Terminal.create({
    commandRepository: commandRepositoryFactory(),
    elements: {
      results: document.getElementById('terminalReslutsCont'),
      input: document.getElementById('terminalTextInput'),
    },
  });
};

export default terminalFactory;
