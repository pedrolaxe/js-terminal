import Terminal from './terminal';

const create = () => {
  return Terminal.create({
    results: document.getElementById('terminalReslutsCont'),
    textInput: document.getElementById('terminalTextInput'),
  });
};

export default { create };
