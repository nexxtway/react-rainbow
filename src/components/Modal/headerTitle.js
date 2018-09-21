/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function HeaderTitle({ id, title }) {
    if (typeof title === 'string') {
        return (
            <h2
                id={id}
                className="">
                {title}
            </h2>
        );
    }
    return title;
}

HeaderTitle.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
};
HeaderTitle.defaultProps = {
    id: undefined,
    title: undefined,
};
