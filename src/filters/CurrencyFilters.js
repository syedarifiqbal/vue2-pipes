const Filters = {
    currency: (value, fraction = 2, symbol = "$") => {
        value = Number(value);
        if (value >= 0) {
            return `${symbol} ${value.toFixed(fraction).toLocaleString()}`;
        }
        return '';
    },
    amountInThousands: (value) => {
        value = Number(value);
        if(isNaN(value)) return '';
        
        if(value < 1000) return value;

        let x = Math.round(value);
        let x_number_format = x.toLocaleString();
        let x_array = x_number_format.split(',');
        let suffex = ['k', 'm', 'b', 't'];
        let x_count_parts = x_array.length - 1;
        let returnString = `${x_array[0]}${Number(x_array[1][0]) !== 0 ? '.' . x_array[1][0] : ''}`;
        returnString += suffex[x_count_parts - 1];
        return returnString;
    },
    amountInWord: (value, prefix = 'rupees', suffex = 'only') => {
        let num = Number(value);
        
        if(isNaN(num)) return '';

        let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
        let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
        return `${prefix} ${str} ${suffex}`;
    }
};
export default Filters;
