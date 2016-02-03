(function(repository) {
    repository.register({
        name: 'open',
        parameter: {
            name: 'link',
            messageIfMissing: 'Type open + something to navigate.'
        },
        action: function(link) {
            window.open('http://' + link.toLowerCase(), '_blank');
        },
        response: function(link) {
            return '<i>The URL <b>' + link + '</b> should be opened now.</i>';
        }
    });
})(window.CommandRepository);