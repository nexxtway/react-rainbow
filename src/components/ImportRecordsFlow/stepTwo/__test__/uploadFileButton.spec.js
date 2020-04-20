import React from 'react';
import { mount } from 'enzyme';
import UploadFileButton from '../uploadFileButton';
import { uniqueId } from '../../../../libs/utils';
import StyledUploadFileLabel from '../styled/uploadFileLabel';
import HiddenElement from '../../../Structural/hiddenElement';

jest.mock('../../../../libs/utils/uniqueId', () => jest.fn(() => 'uniqueId-value'));

describe('<UploadFileButton />', () => {
    it('should call uniqueId with the right value', () => {
        mount(<UploadFileButton onChange={() => {}} />);
        expect(uniqueId).toHaveBeenCalledWith('upload-file-input');
    });
    it('should associate the input and label with the same id', () => {
        const component = mount(<UploadFileButton onChange={() => {}} />);
        const uploadWrapper = component.find(StyledUploadFileLabel);
        const input = component.find(HiddenElement);
        expect(uploadWrapper.prop('htmlFor')).toBe('uniqueId-value');
        expect(input.prop('id')).toBe('uniqueId-value');
    });
    it('should run change event when a file is added to the input', () => {
        const onChangeFn = jest.fn(() => {});
        const component = mount(<UploadFileButton onChange={onChangeFn} />);
        const input = component.find('input');
        input.simulate('change', { target: { files: ['dummy-value'] } });
        expect(onChangeFn).toHaveBeenCalled();
    });
    it('should have the right props for the upload input', () => {
        const component = mount(<UploadFileButton onChange={() => {}} />);
        const input = component.find(HiddenElement);
        expect(input.prop('type')).toBe('file');
        expect(input.prop('accept')).toBe('text/csv');
        expect(input.prop('multiple')).toBe(false);
    });
});
