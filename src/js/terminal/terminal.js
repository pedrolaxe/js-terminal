import _ from '../underscore';
import CommandRepository from './commandRepository';
import commands from './commands';

const start = () => {
  CommandRepository.register(commands);
};

const create = ({ results, textInput }) => {
  const addTextToResults = text => {
    results.innerHTML += `<p>${text}</p>`;
  };

  const clearInput = () => {
    textInput.value = '';
  };

  const scrollToBottomOfResults = () => {
    results.scrollTop = results.scrollHeight;
  };

  const focus = () => {
    textInput.focus();
    scrollToBottomOfResults();
  };

  const enter = () => {
    const commandText = textInput.value.trim();
    const command = CommandRepository.findByCommandText(commandText.toLowerCase());
    let parameter = '';
    let response = '';

    addTextToResults(_.escape`<p class="userEnteredText">> ${commandText}</p>`);

    if (command) {
      parameter = commandText.replace(command.name, '').trim();
      response = command.execute(parameter);
    } else {
      response = _.escape`<p><i>The command <b>${commandText}</b> was not found. Type <b>Help</b> to see all commands.</i></p>`;
    }

    addTextToResults(response);
    clearInput();
    scrollToBottomOfResults();
  };

  return { focus, enter };
};

export default { start, create };
