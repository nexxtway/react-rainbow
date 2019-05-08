import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SELECTABLE_CHECKBOX } from '../helpers/columns';
import Cell from './cell';
import LoadingCells from './loadingCells';

function isFirstAndNoSelectable(index, type) {
    if (index === 0 && type !== SELECTABLE_CHECKBOX) {
        return true;
    }
    return false;
}

export default function Row(props) {
    const { rowData, columns, isSelected, ...rest } = props;

    const getClassName = () =>
        classnames('rainbow-table_body-row', {
            'rainbow-table_body-row-selected': isSelected,
        });

    let isFirstColumn;
    const cells = columns.map((column, index) => {
        const { header, component, field, type: columnType, children } = column;
        const key = `cell-${index}`;
        const value = rowData[field] || null;
        isFirstColumn =
            !isFirstColumn && (isFirstAndNoSelectable(index, columnType) || index === 1);

        return (
            <Cell
                {...rest}
                key={key}
                rowData={rowData}
                header={header}
                component={component}
                value={value}
                columnType={columnType}
                isFirst={isFirstColumn}
                isSelected={isSelected}
                columnChildren={children}
            />
        );
    });

    if (rowData.type === 'LOADING') {
        return (
            <tr>
                <LoadingCells columns={columns} value={columns.length} />
            </tr>
        );
    }

    return (
        <tr tabIndex={-1} aria-selected={isSelected} className={getClassName()}>
            {cells}
        </tr>
    );
}

Row.propTypes = {
    rowData: PropTypes.object,
    columns: PropTypes.array,
    isSelected: PropTypes.bool,
};

Row.defaultProps = {
    rowData: {},
    columns: [],
    isSelected: false,
};
