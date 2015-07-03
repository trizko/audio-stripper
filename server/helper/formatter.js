var Formatter = function () {};

Formatter.terminalFriendly = function (string) {
  return string.replace('\n', '')
               .replace(/ /g, '\\ ')
               .replace(/\'/g, '\\\'')
               .replace(/\(/g, '\\(')
               .replace(/\)/g, '\\)')
               .replace(/\&/g, '\\&');
};

module.exports = Formatter;
