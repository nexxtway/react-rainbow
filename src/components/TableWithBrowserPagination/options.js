import React from 'react';
import PropTypes from 'prop-types';

export default function Options({ pages }) {
    const options = [];
    let count = 1;
    while (count <= pages) {
        options.push(<option key={count}>{count}</option>);
        count += 1;
    }
    return options;
}

Options.propTypes = {
    pages: PropTypes.number.isRequired,
};
