import React from 'react';
import { mount } from 'enzyme';
import Icon from '../icon';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from '../icons';

describe('<Icon />', () => {
    let files;
    let error;
    let isDragOver = false;
    let value;

    beforeEach(() => {
        files = undefined;
        error = undefined;
        isDragOver = false;
        value = undefined;
    });

    it('should render an UploadIcon with value', () => {
        value = null;
        const component = mount(
            <Icon files={files} error={error} isDragOver={isDragOver} value={value} />,
        );
        const IconUpload = component.find(UploadIcon);
        expect(IconUpload.exists()).toBe(true);
    });

    it('should render an UploadIcon with isDragOver', () => {
        isDragOver = true;
        const component = mount(
            <Icon files={files} error={error} isDragOver={isDragOver} value={value} />,
        );
        const IconUpload = component.find(UploadIcon);
        expect(IconUpload.exists()).toBe(true);
    });

    it('should render an ErrorIcon', () => {
        error = 'Error';
        const component = mount(
            <Icon files={files} error={error} isDragOver={isDragOver} value={value} />,
        );
        const IconUpload = component.find(ErrorIcon);
        expect(IconUpload.exists()).toBe(true);
    });

    it('should render an FileIcon', () => {
        files = [
            {
                name: 'filename.jpg',
            },
        ];
        const component = mount(
            <Icon files={files} error={error} isDragOver={isDragOver} value={value} />,
        );
        const IconUpload = component.find(FileIcon);
        expect(IconUpload.exists()).toBe(true);
    });

    it('should render an FilesIcon', () => {
        files = [
            {
                name: 'filename1.jpg',
            },
            {
                name: 'filename2.jpg',
            },
        ];
        const component = mount(
            <Icon files={files} error={error} isDragOver={isDragOver} value={value} />,
        );
        const IconUpload = component.find(FilesIcon);
        expect(IconUpload.exists()).toBe(true);
    });
});
