import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LoadingCells from './loadingCells';

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
