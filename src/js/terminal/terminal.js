import _ from '../underscore';
import commands from './commands';

const create = ({ results, textInput, commandRepository }) => {
  const addTextToResults = texts => {
    const fullText = _.flatten(texts).map(text => `<p>${text}</p>`).join('');
    results.innerHTML += fullText;
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

  const findCommand = commandText => {
    return commandRepository.findByCommandText(commandText.toLowerCase()) || commands.nullCommand;
  };

  const enter = () => {
    const commandText = textInput.value.trim();
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
