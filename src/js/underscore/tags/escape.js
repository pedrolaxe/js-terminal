import decoratorExpression from './decoratorExpression';

const reHasUnescapedHtml = /[&<>"'`]/g;

const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;',
};

const escapeHtmlChar = char => htmlEscapes[char];

const escape = decoratorExpression(value => {
  return String(value).replace(reHasUnescapedHtml, escapeHtmlChar);
});

export default escape;
