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
        let metadata = this.props.metadata;
        let dataSource = this.props.dataSource;

        let rows = dataSource.map(function (field, index) {

            let fields = metadata.fields.map(function (meta) {
                let CustomView = meta.customView;
                
                return (
                    <td data-label={ meta.label || meta.key } key={ meta.key }>
                        <div className="slds-truncate" title={ field[meta.key] } style={ meta.cellStyles } >
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