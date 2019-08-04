import React from 'react';
import PropTypes from 'prop-types';
import UploadFileButton from './uploadFileButton';
import Preview from './preview';
import './styles.css';

function preventDefault(event) {
    event.stopPropagation();
    event.preventDefault();
}

export default function StepTwo(props) {
    const {
        onProcessFile,
        isLoading,
        hasFileSelected,
        columns,
        data,
        onRemoveFile,
        fileName,
        fileType,
    } = props;

    const handleChange = event => {
        onProcessFile(event.target.files[0]);
    };

    const handleDrop = event => {
        preventDefault(event);
        onProcessFile(event.dataTransfer.files[0]);
    };

    if (hasFileSelected) {
        return (
            <Preview
                fileName={fileName}
                fileType={fileType}
                columns={columns}
                data={data}
                isLoading={isLoading}
                onRemoveFile={onRemoveFile}
            />
        );
    }

    return (
        <div
            className="rainbow-import-records-flow_step-two-container"
            onDragEnter={preventDefault}
            onDragOver={preventDefault}
            onDrop={handleDrop}
        >
            <UploadFileButton onChange={handleChange} />
            <h1 className="rainbow-import-records-flow_step-two-text">
                Find the file in your desktop.
            </h1>
        </div>
    );
}

StepTwo.propTypes = {
    onProcessFile: PropTypes.func,
    isLoading: PropTypes.bool,
    hasFileSelected: PropTypes.bool,
    columns: PropTypes.array,
    data: PropTypes.array,
    onRemoveFile: PropTypes.func,
    fileName: PropTypes.string,
    fileType: PropTypes.string,
};

StepTwo.defaultProps = {
    onProcessFile: () => {},
    isLoading: false,
    hasFileSelected: false,
    columns: [],
    data: [],
    onRemoveFile: () => {},
    fileName: '',
    fileType: '',
};
