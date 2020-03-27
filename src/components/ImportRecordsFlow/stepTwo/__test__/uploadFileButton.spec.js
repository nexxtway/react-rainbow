import React from 'react';
import { mount } from 'enzyme';
import UploadFileButton from '../uploadFileButton';
import { uniqueId } from '../../../../libs/utils';

jest.mock('../../../../libs/utils/uniqueId', () => jest.fn(() => '101'));

describe('<UploadFileButton />', () => {
    it('should have unique id set properly', () => {
        const component = mount(<UploadFileButton onChange={() => {}} />);
        const input = component.find('input');
        expect(uniqueId).toHaveBeenCalledWith('upload-file-input');
        expect(input.prop('id')).toBe('101');
    });
    it('should run change event when a file is added to the input', () => {
        const onChangeFn = jest.fn(() => {});
        const component = mount(<UploadFileButton onChange={onChangeFn} />);
        const input = component.find('input');
        input.simulate('change', { target: { files: ['dummy-value'] } });
        expect(onChangeFn).toHaveBeenCalled();
    });
});
