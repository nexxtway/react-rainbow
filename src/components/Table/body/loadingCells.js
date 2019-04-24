import React from 'react';
import PropTypes from 'prop-types';

const widths = ['40%', '60%', '70%', '85%', '95%'];

function getRandomWidth() {
    return widths[Math.floor(Math.random() * widths.length)];
}

export default function LoadingCells({ value }) {
    if (value > 0) {
        return Array(value).fill().map((item, index) => {
            const key = `loading-cell-${index}`;
            const styles = {
                width: getRandomWidth(),
            };

            return (
                <td key={key}>
                    <div className="rainbow-table_body--loading">
                        <div className="rainbow-table_body-element--loading" style={styles} />
                    </div>
                </td>
            );
        });
    }
    return null;
}

LoadingCells.propTypes = {
    value: PropTypes.number,
};

LoadingCells.defaultProps = {
    value: 0,
};

