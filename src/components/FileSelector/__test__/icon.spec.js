import React from 'react';
import { mount } from 'enzyme';
import { Picture } from '@rainbow-modules/icons';
import Icon from '../icon';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from '../icons';

describe('<Icon />', () => {
    it('should render a Picture when value is null', () => {
        const value = null;
        const isDragOver = false;
        const component = mount(
            <Icon isDragOver={isDragOver} value={value} uploadIcon={<Picture />} />,
        );
        const icon = component.find(Picture);
        expect(icon.exists()).toBe(true);
    });

    it('should render a Picture', () => {
        const isDragOver = false;
        const component = mount(<Icon isDragOver={isDragOver} uploadIcon={<Picture />} />);
        const icon = component.find(Picture);
        expect(icon.exists()).toBe(true);
    });

    it('should render an UploadIcon when value is null', () => {
        const value = null;
        const isDragOver = false;
        const component = mount(<Icon isDragOver={isDragOver} value={value} />);
        const icon = component.find(UploadIcon);
        expect(icon.exists()).toBe(true);
    });

    it('should render an UploadIcon when isDragOver is true', () => {
        const isDragOver = true;
        const component = mount(<Icon isDragOver={isDragOver} />);
        const icon = component.find(UploadIcon);
        expect(icon.exists()).toBe(true);
    });

    it('should render an ErrorIcon', () => {
        const error = 'Error';
        const isDragOver = false;
        const component = mount(<Icon error={error} isDragOver={isDragOver} />);
        const icon = component.find(ErrorIcon);
        expect(icon.exists()).toBe(true);
    });

    it('should render a FileIcon', () => {
        const files = [
            {
                name: 'filename.jpg',
            },
        ];
        const isDragOver = false;
        const component = mount(<Icon files={files} isDragOver={isDragOver} />);
        const icon = component.find(FileIcon);
        expect(icon.exists()).toBe(true);
    });

    it('should render a FilesIcon', () => {
        const files = [
            {
                name: 'filename1.jpg',
            },
            {
                name: 'filename2.jpg',
            },
        ];
        const isDragOver = false;
        const component = mount(<Icon files={files} isDragOver={isDragOver} />);
        const icon = component.find(FilesIcon);
        expect(icon.exists()).toBe(true);
    });
});
