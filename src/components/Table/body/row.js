import React from 'react';
import PropTypes from 'prop-types';
import { getFieldValue } from '../helpers/rows';
import Cell from './cell';
import LoadingCells from './loadingCells';
import StyledRow from './styled/row';

export default function Row(props) {
    const { rowData, columns, isSelected, ...rest } = props;

    const cells = columns.map((column, index) => {
        const {
            header,
            component,
            field,
            sortable,
            width,
            defaultWidth,
            computedWidth,
            isResized,
            type: columnType,
            isFirstDataColumn,
            children,
            ...restColumnProps
        } = column;
        const key = `cell-${index}`;
        const value = getFieldValue(rowData, field);

        return (
            <Cell
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
                restColumnProps={restColumnProps}
                key={key}
                rowData={rowData}
                header={header}
                component={component}
                value={value}
                columnType={columnType}
                isFirst={isFirstDataColumn}
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
        <StyledRow
            data-id="table_body-row"
            tabIndex={-1}
            aria-selected={isSelected}
            isSelected={isSelected}
        >
            {cells}
        </StyledRow>
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
