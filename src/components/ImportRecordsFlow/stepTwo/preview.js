import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../ButtonIcon';
import Table from '../../Table';
import Column from '../../Column';
import Spinner from '../../Spinner';
import CSVDocIcon from '../icons/csv';
import TrashIcon from '../icons/trash';

function PreviewTable(props) {
    const { columns, data, isLoading } = props;

    if (isLoading) {
        return (
            <div className="rainbow-import-records-flow_step-two-spinner-container">
                <Spinner />
            </div>
        );
    }
    return (
        <Table className="rainbow-import-records-flow_table" keyField="id" data={data}>
            {columns.map(col => (
                <Column key={col} header={col} field={col} />
            ))}
        </Table>
    );
}

PreviewTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default function Preview(props) {
    const { fileName, fileType, columns, data, isLoading, onRemoveFile } = props;
    const previewData = data.slice(0, 5);

    return (
        <div>
            <div className="rainbow-import-records-flow_step-two-file-card">
                <CSVDocIcon />
                <div className="rainbow-import-records-flow_step-two-file-card-content">
                    <h1
                        title={fileName}
                        className="rainbow-import-records-flow_step-two-file-card-title"
                    >
                        {fileName}
                    </h1>
                    <h2 className="rainbow-import-records-flow_step-two-file-card-description">
                        {fileType}
                    </h2>
                </div>
                <ButtonIcon
                    className="rainbow-import-records-flow_step-two-file-card-delete-button-icon"
                    icon={
                        <TrashIcon className="rainbow-import-records-flow_step-two-file-card-delete-icon" />
                    }
                    title="Remove file"
                    assistiveText="Remove file"
                    onClick={onRemoveFile}
                />
            </div>
            <PreviewTable columns={columns} data={previewData} isLoading={isLoading} />
        </div>
    );
}

Preview.propTypes = {
    fileName: PropTypes.string,
    fileType: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onRemoveFile: PropTypes.func,
};

Preview.defaultProps = {
    fileName: '',
    fileType: '',
    columns: [],
    data: [],
    isLoading: false,
    onRemoveFile: () => {},
};
