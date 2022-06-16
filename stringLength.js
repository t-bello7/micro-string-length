const stringLength = word =>  (word.replace(/[\W_]/g, '').length > 0 && word.replace(/[\W_]/g, '').length < 10) ? word.replace(/[\W_]/g, '').length : 'string characters must be greater than 1 and less than 10';

module.exports = stringLength;