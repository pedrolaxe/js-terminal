/**
* JS Terminal
* Version 1.1.4
* Creator: Pedro Laxe <pedro@phpsec.com.br>
* Contributor: Gabriel Takashi Katakura <gt.katakura@gmail.com>
**/

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
