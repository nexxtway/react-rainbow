import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UploadFileButton from './uploadFileButton';
import Preview from './preview';
import StyledContainer from './styled/container';
import StyledText from './styled/text';

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
        <StyledContainer
            isDragOver={isDragOver}
            onDragEnter={preventDefault}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            draggable
        >
            <UploadFileButton onChange={handleChange} />
            <StyledText>Find the file in your desktop.</StyledText>
        </StyledContainer>
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
