import React from 'react';
import PropTypes from 'prop-types';

export default function Empty(props) {
    const {
        emptyIcon,
        emptyTitle,
        emptyDescription,
        columnsLength,
    } = props;

    return (
        <tr>
            <td colSpan={columnsLength}>
                <div className="rainbow-table_body--empty-container">
                    <span className="rainbow-table_body--empty-icon">
                        {emptyIcon}
                    </span>
                    <h1 className="rainbow-table_body--empty-title">
                        {emptyTitle}
                    </h1>
                    <h2 className="rainbow-table_body--empty-description">
                        {emptyDescription}
                    </h2>
                </div>
            </td>
        </tr>
    );
}

Empty.propTypes = {
    columnsLength: PropTypes.number,
    emptyIcon: PropTypes.node,
    emptyTitle: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    emptyDescription: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

Empty.defaultProps = {
    columnsLength: 0,
    emptyIcon: undefined,
    emptyTitle: undefined,
    emptyDescription: undefined,
};
