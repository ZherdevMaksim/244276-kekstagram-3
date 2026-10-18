// eslint-disable-next-line no-unused-vars
const checkLength = (str, length) => str.length >= +(length);

// eslint-disable-next-line no-unused-vars
const isPalindrome = function (str) {
  const normalStr = str.replaceAll(' ', '').toLowerCase();
  let reverseStr = '';

  for (let i = normalStr.length - 1; i >= 0; i--) {
    reverseStr += normalStr[i];
  }

  return normalStr === reverseStr;
};

// eslint-disable-next-line no-unused-vars
const getNumber = function (value) {
  const str = value.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if(str[i] >= '0' && str[i] <= '9') {
      result += str[i];
    }
  }
  return str.length > 0 ? parseInt(result, 10) : NaN;
};
