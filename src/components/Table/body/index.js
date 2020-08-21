import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import Loading from './loading';
import Empty from './empty';

function getData(data = [], isLoading = false) {
    let newData;
    if (isLoading) {
        newData = [...data, { type: 'LOADING' }];
    } else {
        newData = data;
    }
    return newData;
}

export default class Body extends PureComponent {
    render() {
        const {
            data,
            columns,
            rows,
            tableId,
            onSelectRow,
            onDeselectRow,
            isLoading,
            emptyIcon,
            emptyTitle,
            emptyDescription,
        } = this.props;
        const isEmpty = data.length === 0;
        const columnsLength = columns.length;

        if (isEmpty && isLoading) {
            return <Loading columns={columns} />;
        }

        if (isEmpty && !isLoading) {
            return (
                <Empty
                    columnsLength={columnsLength}
                    emptyIcon={emptyIcon}
                    emptyTitle={emptyTitle}
                    emptyDescription={emptyDescription}
                />
            );
        }

        const newData = getData(data, isLoading);
        return newData.map((item, index) => {
            const row = rows[index];
            const rowsLength = rows.length;
            const rowKeyValue = rows[index] && rows[index].key;
            const key = rowKeyValue || `row-${index + 1}`;

            return (
                <Row
                    {...row}
                    key={key}
                    rowData={item}
                    columns={columns}
                    tableId={tableId}
                    rowIndex={index}
                    rowsLength={rowsLength}
                    onSelectRow={(event, isMultiple) => onSelectRow(event, isMultiple, rowKeyValue)}
                    onDeselectRow={(event, isMultiple) =>
                        onDeselectRow(event, isMultiple, rowKeyValue)
                    }
                />
            );
        });
    }
}

Body.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    rows: PropTypes.array,
    tableId: PropTypes.string.isRequired,
    onSelectRow: PropTypes.func,
    onDeselectRow: PropTypes.func,
    emptyIcon: PropTypes.node,
    emptyTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    emptyDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isLoading: PropTypes.bool,
};

Body.defaultProps = {
    data: [],
    columns: [],
    rows: [],
    emptyIcon: undefined,
    emptyTitle: undefined,
    emptyDescription: undefined,
    onSelectRow: () => {},
    onDeselectRow: () => {},
    isLoading: false,
};
