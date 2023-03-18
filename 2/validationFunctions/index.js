const usernameRegex = /^[a-zA-Z0-9]+$/;

function onlyLettersAndNumbers(str) {
  return usernameRegex.test(str);
}

module.exports = { onlyLettersAndNumbers };

