const names = [
  'openWindowCommand',
  'replyToCreatorCommand',
  'replyToDateCommand',
  'replyToGitPushOriginMasterCommand',
  'replyToGitStatusCommand',
  'replyToHelloCommand',
  'replyToHelpCommand',
  'replyToLoveYouCommand',
  'replyToTimeCommand',
  'searchOnGoogleCommand',
  'searchOnIiissaCommand',
  'searchOnWikiCommand',
  'searchOnYahooCommand',
  'searchOnYoutubeCommand',
];

const commands = names.reduce((hash, name) => {
  hash[name] = require(`./${name}`).default;
  return hash;
}, {});

commands[Symbol.iterator] = function*() {
  for (const name of names) {
    yield commands[name];
  }
};

export default commands;
