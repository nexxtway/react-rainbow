import React from 'react';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from '../icons';

export default function getIcon(files, error) {
    if (error) {
        return <ErrorIcon />;
    }
    if (files && files.length === 1) {
        return <FileIcon />;
    }
    if (files && files.length > 1) {
        return <FilesIcon />;
    }
    return <UploadIcon />;
}
