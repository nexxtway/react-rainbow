import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import Loading from './loading';
import Empty from './empty';
import './styles.css';

function getData(data = [], isLoading = false) {
    let newData;
    if (isLoading) {
        newData = [
            ...data,
            { type: 'LOADING' },
        ];
    }
    newData = data;
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
        } = this.props;
        const hasData = Array.isArray(data) && data.length > 0;

        if (!hasData && isLoading) {
            return <Loading columnsLength={columns.length} />;
        }

        if (!hasData && !isLoading) {
            return <Empty />;
        }

        if (hasData && Array.isArray(columns)) {
            const newData = getData(data, isLoading);
            return newData.map((item, index) => {
                const row = rows[index];
                const rowKeyValue = rows[index].key;

                return (
                    <Row
                        {...row}
                        data={item}
                        columns={columns}
                        tableId={tableId}
                        onSelectRow={(event, isMultiple) => onSelectRow(
                            event,
                            isMultiple,
                            rowKeyValue,
                        )}
                        onDeselectRow={(event, isMultiple) => onDeselectRow(
                            event,
                            isMultiple,
                            rowKeyValue,
                        )} />
                );
            });
        }
        return null;
    }
}

Body.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    rows: PropTypes.array,
    tableId: PropTypes.string.isRequired,
    onSelectRow: PropTypes.func,
    onDeselectRow: PropTypes.func,
};

Body.defaultProps = {
    data: [],
    columns: [],
    rows: [],
    onSelectRow: () => {},
    onDeselectRow: () => {},
};
