(function(global) {
    var reHasUnescapedHtml = /[&<>"'`]/g,
        htmlEscapes = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '`': '&#96;'
        },
        escapeHtmlChar = function(char) {
            return htmlEscapes[char];
        };

    global.underscore = {
        escape: function(value) {
            return String(value).replace(reHasUnescapedHtml, escapeHtmlChar);
        }
    };
})(window);