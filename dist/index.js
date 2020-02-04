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
    value = Number(value);

    if (value >= 0) {
      return "$" + value.toFixed(fraction).toLocaleString();
    }

    return '';
  }
};

var Filters$2 = Object.assign({}, Filters, {}, Filters$1);

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    for (var filter in Filters$2) {
      Vue.filter(filter, Filters$2[filter]);
    }
  }
};

module.exports = index;
