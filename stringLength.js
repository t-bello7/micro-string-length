const stringLength = word =>  word.replace(/[\W_]/g, '').length

module.exports = stringLength;