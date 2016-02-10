(function(Terminal) {
    Terminal.commands.openWindowCommand = {
        name: 'open',
        parameter: {
            name: 'link',
            messageIfMissing: 'Type open + something to navigate.'
        },
        execute: function(link) {
            window.open('http://' + link.toLowerCase(), '_blank');
            return '<i>The URL <b>' + link + '</b> should be opened now.</i>';
        }
    };
})(window.Terminal);