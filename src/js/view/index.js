/**
* JS Terminal
* Version 1.1.4
* Creator: Pedro Laxe <pedro@phpsec.com.br>
* Contributor: Gabriel Takashi Katakura <gt.katakura@gmail.com>
**/

import Terminal from '../terminal/terminal';
import TerminalFactory from '../terminal/terminalFactory';

Terminal.start();

document.addEventListener('DOMContentLoaded', () => {
  const terminal = TerminalFactory.create();
  terminal.focus();

  document.getElementsByTagName('form')[0].onsubmit = event => {
    event.preventDefault();
    terminal.enter();
    window.scrollTo(0, 150);
  };
});
