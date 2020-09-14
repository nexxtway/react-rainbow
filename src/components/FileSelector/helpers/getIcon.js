import React from 'react';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from '../icons';

export default function getIcon(files, error, uploadIcon, isDragOver) {
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
    if (uploadIcon) {
        return uploadIcon;
    }
    return <UploadIcon />;
}
