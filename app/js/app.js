(function(global) {
    var Terminal = {
        _resolveCommands: function() {
            return Object.keys(this.commands).map(function(key) {
                return Terminal.CommandDecorator.decorate(Terminal.commands[key]);
            });
        },
        start: function() {
            var resolvedCommands = this._resolveCommands();
            this.CommandRepository.register(resolvedCommands);
        },
        commands: {},
        create: function(options) {
            var results = options.results,
                textInput = options.textInput;
                
            return {
                _addTextToResults: function(text) {
                    results.innerHTML += '<p>' + text + '</p>';
                },
                _clearInput: function() {
                    textInput.value = '';
                },
                _scrollToBottomOfResults: function() {
                    results.scrollTop = results.scrollHeight;
                },
                focus: function() {
                    textInput.focus();
                    this._scrollToBottomOfResults();
                },
                enter: function() {
                    var commandText = textInput.value.trim(),
                        command = Terminal.CommandRepository.findByCommandText(commandText.toLowerCase()),
                        parameter = '',
                        response = '';

                    this._addTextToResults('<p class=\'userEnteredText\'>> ' + commandText + '</p>');
                    
                    if (command) {
                        parameter = commandText.replace(command.name, '').trim();
                        response = command.execute(parameter);
                    }
                    else {
                        response = '<p><i>The command <b>' + commandText + '</b> was not found. Type <b>Help</b> to see all commands.</i></p>';
                    }
                    
                    this._addTextToResults(response);
                    this._clearInput();
                    this._scrollToBottomOfResults();
                }
            };
        }
    };
    
    global.Terminal = Terminal;
})(window);
(function(Terminal) {
    var emptyFunction = function() {},
        isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };

    Terminal.CommandDecorator = {
        _transformToFunction: function(response) {
            if (isArray(response)) {
                response = response.join('<br>');    
            }
            
            if (typeof response === 'string') {
                return function() {
                    return response;
                };
            }
            
            return response || emptyFunction;
        },
        decorate: function(command) {
            var name = command.name || '',
                aliases = command.aliases || [],
                execute = command.execute || this._transformToFunction(command.response);
                
            return {
                name: name,
                aliases: aliases,
                aliasesAndName: aliases.concat([ name ]), 
                parameter: command.parameter || null,
                execute: function(param) {
                    if (param === '' && this.parameter) {
                        return this.parameter.messageIfMissing;
                    }
                    
                    return execute(param);
                }
            };
        }
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.CommandRepository = {
        _data: [],
        register: function(commands) {
            for (var i = 0, ii = commands.length; i < ii; i++) {
                this._data.push(commands[i]);
            }
        },
        findByCommandText: function(commandText) {
            return this._data.find(function(command, index, obj) {
                var aliasesAndName = command.aliasesAndName;
                
                if (command.parameter) {
                    return !!aliasesAndName.find(function(aliasOrName) {
                        return commandText.indexOf(aliasOrName) === 0;
                    });
                }
                
                return aliasesAndName.indexOf(commandText) !== -1;
            });
        }
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.TerminalFactory = {
        create: function() {
            return Terminal.create({
                results: document.getElementById('terminalReslutsCont'),
                textInput: document.getElementById('terminalTextInput')
            });
        }
    }
})(window.Terminal);
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
(function(Terminal) {
    Terminal.commands.replyToCreatorCommand = {
        name: 'creators',
        response: 'My Creator is Pedro Laxe with cooperation of Gabriel Takashi Katakura.'
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.replyToDateCommand = {
        name: 'date',
        response: function() {
            var timeAndDate = new Date(),
                dateDay = timeAndDate.getDate(),
                dateMonth = timeAndDate.getMonth() + 1,
                dateYear = timeAndDate.getFullYear();
            
            console.log(dateDay);

            return dateDay + '/' + dateMonth + '/' + dateYear;
        }
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.replyToGitCommand = {
        name: 'git',
        response: [
            'git push origin master',
            'you can check this project\'s repo on GitHub: <a target=\'_blank\' href=\'https://github.com/pedrolaxe/js-terminal\'>https://github.com/pedrolaxe/js-terminal</a>'
        ]
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.replyToGitPushOriginMasterCommand = {
        name: 'git push origin master',
        response: 'Push me baby!' // \o/
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.replyToGitStatusCommand = {
        name: 'git status',
        response: 'nothing to commit, working directory clean.'
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.replyToHelloCommand = {
        name: 'hello',
        aliases: [ 'hi', 'hola', 'oi' ],
        response: 'Hello, it\'s me... I was wondering if after all these years you\'d like to meet...'
    };
})(window.Terminal);
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
(function(Terminal) {
    Terminal.commands.replyToLoveYouCommand = {
        name: 'love you',
        aliases: [ 'i love you', 'love' ],
        response: 'Aww! That\'s so sweet. Here\'s some love for you too ❤ ❤ ❤ !'
    };
})(window.Terminal);
(function(Terminal) {
    function padLeft(value, totalWidth, paddingChar){
        return Array(totalWidth - value.toString().length + 1).join(paddingChar || '0') + value;
    }
    
    Terminal.commands.replyToTimeCommand = {
        name: 'time',
        response: function() {
            var timeAndDate = new Date(),
                timeHours = padLeft(timeAndDate.getHours(), 2),
                timeMinutes = padLeft(timeAndDate.getMinutes(), 2);
            
            console.log(timeAndDate.getDate());

            return timeHours + ":" + timeMinutes;
        }
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.searchOnGoogleCommand = {
        name: 'google',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type google + something to search for.'
        },
        execute: function(search) {
            window.open('https://www.google.com.br/search?q=' + search, '_blank');
            return '<i>I\'ve searched on Google for <b>' + search + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.searchOnWikiCommand = {
        name: 'wiki',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type wiki + something to search for.'
        },
        execute: function(search) {
            window.open('https://pt.wikipedia.org/w/index.php?search=' + search, '_blank');
            return '<i>I\'ve searched on Wikipedia for <b>' + search + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal);
(function(Terminal) {
    Terminal.commands.searchOnYahooCommand = {
        name: 'yahoo',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type yahoo + something to search for.'
        },
        execute: function(search) {
            window.open('https://br.search.yahoo.com/search?p=' + search, '_blank');
            return '<i>I\'ve searched on Yahoo for <b>' + search + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal);

(function(Terminal) {
    Terminal.commands.searchOnYoutubeCommand = {
        name: 'youtube',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type youtube + something to search for.'
        },
        execute: function(search) {
            window.open('https://www.youtube.com/results?search_query=' + search, '_blank');
            return '<i>I\'ve searched on YouTube for <b>' + search + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal);
/**
* JS Terminal
* Version 1.1
* Creator: Pedro Laxe <pedro@phpsec.com.br>
* Contributor: Gabriel Takashi Katakura <gt.katakura@gmail.com>
**/

(function(Terminal) {
    Terminal.start();
    
    document.addEventListener('DOMContentLoaded', function() {
        var terminal = Terminal.TerminalFactory.create();
        terminal.focus();
        
        document.getElementsByTagName('form')[0].onsubmit = function(evt) {
            evt.preventDefault();
            terminal.enter();
            window.scrollTo(0, 150);
            console.log("JS Terminal Loaded");
        };
    });
})(window.Terminal);