import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

    const [isDragOver, setIsDragOver] = useState(false);

    const getContainerClassNames = () =>
        classnames('rainbow-import-records-flow_step-two-container', {
            'rainbow-import-records-flow_step-two-container-drag-over': isDragOver,
        });

    const handleChange = event => {
        onProcessFile(event.target.files[0]);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDragOver = event => {
        preventDefault(event);
        setIsDragOver(true);
    };

    const handleDrop = event => {
        preventDefault(event);
        setIsDragOver(false);
        const { files } = event.dataTransfer;
        if (files.length === 1 && files[0].type === 'text/csv') {
            onProcessFile(files[0]);
        }
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
            className={getContainerClassNames()}
            onDragEnter={preventDefault}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            draggable
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
