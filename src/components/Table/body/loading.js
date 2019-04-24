import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LoadingCells from './loadingCells';

export default function Loading({ columns }) {
    const columnsLength = columns.length;
    return (
        <Fragment>
            <tr>
                <LoadingCells columns={columns} value={columnsLength} />
            </tr>
            <tr>
                <LoadingCells columns={columns} value={columnsLength} />
            </tr>
            <tr>
                <LoadingCells columns={columns} value={columnsLength - 1} />
            </tr>
            <tr>
                <LoadingCells columns={columns} value={columnsLength - 3} />
            </tr>
        </Fragment>
    );
}

Loading.propTypes = {
    columns: PropTypes.array,
};

Loading.defaultProps = {
    columns: [],
};
