import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import StyledUploadFileLabel from './styled/uploadFileLabel';
import StyledInput from './styled/input';
import StyledUploadIcon from './styled/uploadIcon';

export default function UploadFileButton({ onChange }) {
    const [uploadFileInputId] = useState(uniqueId('upload-file-input'));

    return (
        <StyledUploadFileLabel htmlFor={uploadFileInputId}>
            <StyledInput
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
};
