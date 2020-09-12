import React from 'react';
import PropTypes from 'prop-types';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from './icons';

export default function Icon({ files, error, isDragOver, value }) {
    if (value !== null) {
        if (!isDragOver) {
            if (error) {
                return <ErrorIcon />;
            }
            if (files && files.length === 1) {
                return <FileIcon />;
            }
            if (files && files.length > 1) {
                return <FilesIcon />;
            }
        }
    }
    return <UploadIcon />;
}
Icon.propTypes = {
    /** An array with the files selected */
    files: PropTypes.array,
    /** Specifies that an input field must be filled out before submitting the form */
    error: PropTypes.string,
    /** A boolean that indicates whether a file is being dragged */
    isDragOver: PropTypes.bool,
    /** An object to do not let change the icon and text information  */
    value: PropTypes.object,
};

Icon.defaultProps = {
    files: undefined,
    error: undefined,
    isDragOver: false,
    value: undefined,
};
