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
        },
        toStringTag = Object.prototype.toString;

    global.underscore = {
        escape: function(value) {
            return String(value).replace(reHasUnescapedHtml, escapeHtmlChar);
        },
        isArray: function(arg) {
            return toStringTag.call(arg) === '[object Array]';
        },
        noop: function(){}
    };
})(window);