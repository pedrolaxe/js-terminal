import _ from '../underscore';
import commands from './commands';

const create = ({
  commandRepository: { findByCommandText },
  elements: { results, input },
}) => {
  const addTextToResults = texts => {
    const fullText = _.flatten([texts]).map(text => `<p>${text}</p>`).join('');
    results.innerHTML += fullText;
  };

  const clearInput = () => {
    input.value = '';
  };

  const scrollToBottomOfResults = () => {
    results.scrollTop = results.scrollHeight;
  };

  const focus = () => {
    input.focus();
    scrollToBottomOfResults();
  };

  const findCommand = commandText => {
    return findByCommandText(commandText.toLowerCase()) || commands.nullCommand;
  };

  const enter = () => {
    const commandText = input.value.trim();
    const command = findCommand(commandText);
    const parameter = commandText.replace(command.name, '').trim();
    const response = command.execute(parameter);

    addTextToResults(_.escape`<p class="userEnteredText">> ${commandText}</p>`);
    addTextToResults(response);
    clearInput();
    scrollToBottomOfResults();
  };

  return { focus, enter };
};

export default { create };
