import React from 'react';
import PropTypes from 'prop-types';
import HeaderRows from './headerRows';
import BodyRows from './bodyRows';

export default function PropsTable(props) {
    return (
        <table className="slds-table slds-table_bordered">
            <thead>
                <HeaderRows columns={props.columns} />
            </thead>
            <tbody>
                <BodyRows {...props} />
            </tbody>
        </table>
    );
}

PropsTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            caption: PropTypes.string.isRequired,
            render: PropTypes.func.isRequired,
        }),
    ).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    getRowKey: PropTypes.func.isRequired,
};
