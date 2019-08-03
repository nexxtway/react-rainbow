import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UploadIcon from '../icons/upload';
import { uniqueId } from '../../../libs/utils';

export default function UploadFileButton({ onChange }) {
    const [uploadFileInputId] = useState(uniqueId('upload-file-input'));

    return (
        <label
            className="rainbow-import-records-flow_step-two_upload-file-label"
            htmlFor={uploadFileInputId}
        >
            <input
                id={uploadFileInputId}
                className="rainbow-import-records-flow_step-two_upload-file-input"
                type="file"
                accept="text/csv"
                multiple={false}
                onChange={onChange}
            />
            <UploadIcon className="rainbow-import-records-flow_step-two-upload-button-icon" />
            Upload CSV File
        </label>
    );
}

UploadFileButton.propTypes = {
    onChange: PropTypes.func.isRequired,
};
