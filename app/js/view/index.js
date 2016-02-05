/**
* JS Terminal
* Version 1.1
* Creator: Pedro Laxe <pedro@phpsec.com.br>
* Contributor: Gabriel Takashi Katakura <gt.katakura@gmail.com>
**/

(function(TerminalFactory) {
    document.addEventListener('DOMContentLoaded', function() {
        var terminal = TerminalFactory.create();
        terminal.focus();
        
        document.getElementsByTagName('form')[0].onsubmit = function(evt) {
            evt.preventDefault();
            terminal.enter();
            window.scrollTo(0, 150);
            console.log("JS Terminal Loaded");
        };
    });
})(window.TerminalFactory);