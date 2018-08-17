import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderRows({ columns }) {
    return (
        <tr className="slds-text-title_caps">
            {columns.map(({ caption }) => (
                <th key={caption} scope="col">
                    <div className="slds-truncate" title={caption}>
                        {caption}
                    </div>
                </th>
            ))}
        </tr>
    );
}

HeaderRows.propTypes = {
    columns: PropTypes.array.isRequired,
};
