import React from 'react';

export default class DataGrid extends React.Component {
    render() {
        let tHead = this.getTableHeader();
        let tBody = this.getTableBody();
        
        return (
            <table className="slds-table slds-table--bordered slds-table--cell-buffer">
                { tHead }
                { tBody }
            </table>
        );
    }

    getTableHeader() {
        let fields = this.props.metadata.fields;
        let headers = fields.map((field) => {
            let label = field.label || field.key;
            return (
                <th scope="col" key={ field.key }>
                    <div className="slds-truncate" title={ label }>{ label }</div>
                </th>
            )
        });

        return (
            <thead>
                <tr className="slds-text-title--caps">
                    { headers }
                </tr>
            </thead>
        );
    }

    getTableBody() {
        var metadata = this.props.metadata;
        var dataSource = this.props.dataSource;

        var rows = dataSource.map(function (field, index) {

            var fields = metadata.fields.map(function (meta) {
                let CustomView = meta.customView;
                
                return (
                    <td data-label={ meta.label || meta.key } key={ meta.key }>
                        <div className="slds-truncate" title={ field[meta.key] } >
                            { CustomView ? <CustomView value={ field[meta.key] }/> : field[meta.key] }
                        </div>
                    </td>
                );
            });

            return (
                <tr key={ index }>
                    { fields }
                </tr>
            );
        });

        return (
            <tbody>
                { rows }
            </tbody>
        )
    }


}

DataGrid.propTypes = {
    dataSource: React.PropTypes.array.isRequired,
    metadata: React.PropTypes.object.isRequired
};