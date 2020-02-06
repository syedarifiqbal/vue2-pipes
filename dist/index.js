/*!
 * vue2-pipes v1.0.1
 * (c) Syed Arif Iqbal
 * Released under the ISC License.
 */
'use strict';

var Filters = {
  date: function date(value) {
    if (!value) return '';
    var date = new Date(value);
    return date.toLocaleDateString('en-US');
  },
  time: function time(value) {
    if (!value) return '';
    var date = new Date(value);
    return date.toLocaleTimeString('en-US');
  },
  dateTime: function dateTime(value) {
    if (!value) return '';
    var date = new Date(value);
    return date.toLocaleString('en-US');
  }
};

var Filters$1 = {
  currency: function currency(value) {
    var fraction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var symbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "$";
    value = Number(value);

    if (value >= 0) {
      return "".concat(symbol, " ").concat(value.toFixed(fraction).toLocaleString());
    }

    return '';
  },
  amountInThousands: function amountInThousands(value) {
    value = Number(value);
    if (isNaN(value)) return '';
    if (value < 1000) return value;
    var x = Math.round(value);
    var x_number_format = x.toLocaleString();
    var x_array = x_number_format.split(',');
    var suffex = ['k', 'm', 'b', 't'];
    var x_count_parts = x_array.length - 1;
    var returnString = "".concat(x_array[0]).concat(Number(x_array[1][0]) !== 0 ? '.' + x_array[1][0] : '');
    returnString += suffex[x_count_parts - 1];
    return returnString;
  },
  amountInWord: function amountInWord(value) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rupees';
    var suffex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'only';
    var num = Number(value);
    if (isNaN(num)) return '';
    var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if ((num = num.toString()).length > 9) return 'overflow';
    var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += n[1] != 0 ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += n[2] != 0 ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += n[3] != 0 ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += n[4] != 0 ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += n[5] != 0 ? (str != '' ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return "".concat(prefix, " ").concat(str, " ").concat(suffex);
  }
};

/**
 *  Converts a string into Capitalize
 * 
 * 'abc' => 'Abc'
 * 
 * @param {Object} options
 */
// function capitalize (value, options) {
//   const globalOptions = (this && this.capitalize) ? this.capitalize : {}
//   options = options || globalOptions
//   var onlyFirstLetter = options.onlyFirstLetter != null ? options.onlyFirstLetter : false
//   if (!value && value !== 0) return ''
//   if(onlyFirstLetter === true) {
//     return value.toString().charAt(0).toUpperCase() + value.toString().slice(1)
//   } else {
//     value = value.toString().toLowerCase().split(' ')
//     return value.map(function(item) {
//       return item.charAt(0).toUpperCase() + item.slice(1)
//     }).join(' ')
//   }
// }
var Filters$2 = {
  ucword: function ucword(value) {
    if (!value) return '';
    value = value.toString().toLowerCase().split(' ');
    return value.map(function (item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }).join(' ');
  },
  ucfirst: function ucfirst(value) {
    if (!value) return '';
    return value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
  },
  uppercase: function uppercase(value) {
    if (!value) return '';
    return value.toUpperCase();
  },
  lowercase: function lowercase(value) {
    if (!value) return '';
    return value.toLowerCase();
  },
  reverse: function reverse(value) {
    if (!value) return '';
    return value.toString().split(' ').reverse().join(' ');
  },
  "default": function _default(value, defaultTest) {
    return value || defaultTest;
  },
  trim: function trim(value) {
    return value.toString().trim();
  },
  slug: function slug(value) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    value = value.replace(/^\s+|\s+$/g, ''); // trim

    value = value.toLowerCase(); // remove accents, swap ñ for n, etc

    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeiiiioooouuuunc------";

    for (var i = 0, l = from.length; i < l; i++) {
      value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, separator) // collapse whitespace and replace by -
    .replace(/-+/g, separator); // collapse dashes

    return value;
  },
  snake: function snake(value) {
    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';

    /* eslint no-console: "error" */
    value = Filters$2.ucword(value).replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/g, '');
    value = value.replace(/((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))(?=[A-Z])/g, "$1".concat(delimiter));
    return value;
  },
  limit: function limit(value) {
    var _limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

    if (value <= _limit) {
      return value;
    }

    return value.toString().substr(0, _limit) + end;
  },
  words: function words(value) {
    var _words = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return value.split(" ").splice(0, _words).join(" ");
  }
};

/*eslint-disable no-unused-vars*/
var Filters$3 = Object.assign({}, Filters, {}, Filters$1, {}, Filters$2);

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    for (var filter in Filters$3) {
      Vue.filter(filter, Filters$3[filter]);
    }
  }
};

module.exports = index;
