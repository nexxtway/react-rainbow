import React from 'react';
import PropTypes from 'prop-types';
import { SELECTABLE_CHECKBOX } from '../helpers/columns';

const widths = ['40%', '60%', '70%', '85%', '95%'];

function getRandomWidth() {
    return widths[Math.floor(Math.random() * widths.length)];
}

export default function LoadingCells({ value, columns }) {
    if (value > 0) {
        return Array(value)
            .fill()
            .map((item, index) => {
                const key = `loading-cell-${index}`;
                const { type } = columns[index];
                const isActionOrSelectable = type === SELECTABLE_CHECKBOX || type === 'action';
                const styles = {
                    width: isActionOrSelectable ? '100%' : getRandomWidth(),
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
    columns: PropTypes.array,
};

LoadingCells.defaultProps = {
    value: 0,
    columns: [],
};
