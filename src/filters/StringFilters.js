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

const Filters = {
  ucword: (value) => {
      if (!value) return '';
      value = value.toString().toLowerCase().split(' ')
      return value.map(function(item) {
        return item.charAt(0).toUpperCase() + item.slice(1)
      }).join(' ');
  },
  ucfirst: (value) => {
      if (!value) return '';
      return value.toString().charAt(0).toUpperCase() + value.toString().slice(1)
  },
  uppercase: (value) => {
      if (!value) return '';
      return value.toUpperCase();
  },
  lowercase: (value) => {
      if (!value) return '';
      return value.toLowerCase();
  },
  reverse: (value) => {
      if (!value) return '';
      return value.toString().split(' ').reverse().join(' ');
  },
  default: (value, defaultTest) => {
    return value || defaultTest;
  },
  trim: (value) => {
    return value.toString().trim();
  },
  slug: (value, separator = '-') => {
    value = value.replace(/^\s+|\s+$/g, ''); // trim
    value = value.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
      value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, separator) // collapse whitespace and replace by -
        .replace(/-+/g, separator); // collapse dashes

    return value;
  },
  snake: (value, delimiter = '_') => {
    /* eslint no-console: "error" */
    value = Filters.ucword(value).replace(/\s+/ug, '');
    value = value.replace(/(.)(?=[A-Z])/ug, `$1${delimiter}`);
    return value;
  },
  limit: (value, limit = 100, end = '...') => {
      if (value <= limit) {
          return value;
      }

      return value.toString().substr(0, limit) + end;
  },
  words: (value, words = 100) => {
    return value.split(" ").splice(0,words).join(" ");
  }
};
export default Filters;