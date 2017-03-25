import Terminal from '../terminal/terminal';
import commandRepositoryFactory from '../terminal/commandRepositoryFactory';

const terminalFactory = () => {
  return Terminal.create({
    commandRepository: commandRepositoryFactory(),
    results: document.getElementById('terminalReslutsCont'),
    textInput: document.getElementById('terminalTextInput'),
  });
};

export default terminalFactory;
