import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import StyledUploadFileLabel from './styled/uploadFileLabel';
import StyledUploadIcon from './styled/uploadIcon';
import HiddenElement from '../../Structural/hiddenElement';

export default function UploadFileButton({ onChange, isDragOver }) {
    const [uploadFileInputId] = useState(uniqueId('upload-file-input'));

    return (
        <StyledUploadFileLabel htmlFor={uploadFileInputId} isDragOver={isDragOver}>
            <HiddenElement
                as="input"
                id={uploadFileInputId}
                type="file"
                accept="text/csv"
                multiple={false}
                onChange={onChange}
            />
            <StyledUploadIcon />
            Upload CSV File
        </StyledUploadFileLabel>
    );
}

UploadFileButton.propTypes = {
    onChange: PropTypes.func.isRequired,
    isDragOver: PropTypes.bool,
};

UploadFileButton.defaultProps = {
    isDragOver: false,
};
