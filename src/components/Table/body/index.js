import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import './styles.css';

export default class Body extends PureComponent {
    render() {
        const {
            data,
            columns,
            rows,
            tableId,
            onSelectRow,
            onDeselectRow,
        } = this.props;

        if (Array.isArray(data) && Array.isArray(columns)) {
            return data.map((item, index) => {
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
