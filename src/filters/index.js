/*eslint-disable no-unused-vars*/
import dateTime from './DatetimeFilters';
import currency from './CurrencyFilters';
import stringFilters from './StringFilters'

export default {
    ...dateTime,
    ...currency,
    ...stringFilters,
};
