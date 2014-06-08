exports.strSplit = function (str, len) {
  var regex = new RegExp('.{' + len + '}|.{1,' + Number(len-1) + '}', 'g');
  return str.match(regex);
}