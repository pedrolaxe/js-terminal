import terminalFactory from './terminalFactory';

document.addEventListener('DOMContentLoaded', () => {
  const terminal = terminalFactory();
  terminal.focus();

  document.getElementsByTagName('form')[0].onsubmit = event => {
    event.preventDefault();
    terminal.enter();
    window.scrollTo(0, 150);
  };
});
