import Filters from './filters/index';

export default {
 install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html

    for (let filter in Filters) Vue.filter(filter, Filters[filter]);
 }
};