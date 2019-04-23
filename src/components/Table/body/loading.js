import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const widths = ['40%', '60%', '70%', '85%', '95%'];

function getRandomWidth() {
    return widths[Math.floor(Math.random() * widths.length)];
}

export function LoadingCells({ value }) {
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

export default function Loading({ columnsLength }) {
    return (
        <Fragment>
            <tr>
                <LoadingCells value={columnsLength} />
            </tr>
            <tr>
                <LoadingCells value={columnsLength} />
            </tr>
            <tr>
                <LoadingCells value={columnsLength - 1} />
            </tr>
            <tr>
                <LoadingCells value={columnsLength - 3} />
            </tr>
        </Fragment>
    );
}

Loading.propTypes = {
    columnsLength: PropTypes.number,
};

Loading.defaultProps = {
    columnsLength: 0,
};
