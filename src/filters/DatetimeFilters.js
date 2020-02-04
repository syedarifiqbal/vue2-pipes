const Filters = {
    date: (value) => {
        if (!value) return '';
        const date = new Date(value);
        return date.toLocaleDateString('en-US');
    },
    time: (value) => {
        if (!value) return '';
        const date = new Date(value);
        return date.toLocaleTimeString('en-US');
    },
    dateTime: (value) => {
        if (!value) return '';
        const date = new Date(value);
        return date.toLocaleString('en-US');
    }
};
export default Filters;