import React from 'react';
import { mount } from 'enzyme';
import PhoneInput from '../';

describe('<PhoneInput />', () => {
    it('should accept only numbers.', () => {
        const onChangeMockFn = jest.fn();
        const wrapper = mount(<PhoneInput label="Phone Number" onChange={onChangeMockFn} />);

        wrapper
            .find('input[type="tel"]')
            .first()
            .simulate('change', { target: { value: 'Your phone number is 0987256983' } });
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith(
            expect.objectContaining({
                phone: '0987256983',
            }),
        );
    });
});
