(function(repository) {
    repository.register({
        name: 'git',
        response: [
            'git push origin master',
            'you can check this project\'s repo on GitHub: <a target=\'_blank\' href=\'https://github.com/pedrolaxe/js-terminal\'>https://github.com/pedrolaxe/js-terminal</a>'
        ]
    });
})(window.CommandRepository);