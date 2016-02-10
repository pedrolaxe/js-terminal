(function(Terminal) {
    Terminal.commands.replyToHelpCommand = {
        name: 'help',
        aliases: [ '?' ],
        response: [
            '- Open + website URL to open it in the browser (ex. open phpsec.com.br)',
            '- Google + keyword to search directly in Google (ex. google phpsec)',
            '- Yahoo + keyword to search directly in Yahoo (ex. yahoo dogs)',
            '- YouTube + keyword to search directly in YouTube (ex. youtube fora pt)',
            '- Wiki + keyword to search directly in Wikipedia (ex. wiki php)',
            '- \'Time\' will display the current time.',
            '- \'Date\' will display the current date.',
            '- \'creators\' show the creators names.',
            '* There are more keywords that you have to discover by yourself.'
        ]
    };
})(window.Terminal);