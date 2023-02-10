import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import StyledUploadFileLabel from './styled/uploadFileLabel';
import StyledUploadIcon from './styled/uploadIcon';
import HiddenElement from '../../Structural/hiddenElement';

export default function UploadFileButton({ onChange, isDragOver, borderRadius }) {
    const [uploadFileInputId] = useState(uniqueId('upload-file-input'));

    return (
        <StyledUploadFileLabel
            htmlFor={uploadFileInputId}
            isDragOver={isDragOver}
            borderRadius={borderRadius}
        >
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
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

UploadFileButton.defaultProps = {
    isDragOver: false,
    borderRadius: 'rounded',
};
