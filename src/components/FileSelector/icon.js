import React from 'react';
import PropTypes from 'prop-types';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from './icons';

export default function Icon({ files, error, isDragOver, value, uploadIcon }) {
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
    return uploadIcon || <UploadIcon />;
}
Icon.propTypes = {
    files: PropTypes.array,
    error: PropTypes.string,
    isDragOver: PropTypes.bool,
    value: PropTypes.object,
    uploadIcon: PropTypes.node,
};

Icon.defaultProps = {
    files: undefined,
    error: undefined,
    isDragOver: false,
    value: undefined,
    uploadIcon: undefined,
};
