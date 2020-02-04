const Filters = {
    currency: (value, fraction = 2) => {
        value = Number(value);
        if (value >= 0) {
            return "$" + value.toFixed(fraction).toLocaleString();
        }
        return '';
    },
};
export default Filters;
