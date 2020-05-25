import React from 'react';
import PropTypes from 'prop-types';
import { SELECTABLE_CHECKBOX, WITH_ENUMERABLE } from '../helpers/columns';
import { getFieldValue } from '../helpers/rows';
import Cell from './cell';
import LoadingCells from './loadingCells';
import StyledRow from './styled/row';

function isNotAConfigurationColumn(index, type) {
    const shouldAttempVerification = index === 0 || index === 1;

    if (shouldAttempVerification && type !== SELECTABLE_CHECKBOX && type !== WITH_ENUMERABLE) {
        return true;
    }

    return false;
}

export default function Row(props) {
    const { rowData, columns, isSelected, ...rest } = props;

    let isFirstColumn;
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
            children,
            ...restColumnProps
        } = column;
        const key = `cell-${index}`;
        const value = getFieldValue(rowData, field);
        isFirstColumn =
            !isFirstColumn && (isNotAConfigurationColumn(index, columnType) || index === 2);

        return (
            <Cell
                {...rest}
                restColumnProps={restColumnProps}
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
