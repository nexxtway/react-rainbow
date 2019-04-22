import React from 'react';
import PropTypes from 'prop-types';
import EmptyIcon from './emptyIcon';

export default function Loading(props) {
    const {
        iconMessageEmpty,
        titleMessageEmpty,
        descriptionMessageEmpty,
    } = props;

    return (
        <td className="rainbow-table_body--empty-container">
            <span className="rainbow-table_body--empty-icon">
                {iconMessageEmpty}
                <EmptyIcon />
            </span>
            <h1 className="rainbow-table_body--empty-title">
                {titleMessageEmpty}
            </h1>
            <h2 className="rainbow-table_body--empty-description">
                {descriptionMessageEmpty}
            </h2>
        </td>
    );
}

Loading.propTypes = {
    iconMessageEmpty: PropTypes.node,
    titleMessageEmpty: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    descriptionMessageEmpty: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

Loading.defaultProps = {
    iconMessageEmpty: undefined,
    titleMessageEmpty: 'Title empty',
    descriptionMessageEmpty: 'Description of the empty message',
};
