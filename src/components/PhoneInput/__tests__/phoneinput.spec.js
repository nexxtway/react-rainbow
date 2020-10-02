import React from 'react';
import { mount } from 'enzyme';
import PhoneInput from '../';
import { StyledTrigger } from '../styled';

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

    it('should render the dropdown option when an empty array is passed in countries prop', () => {
        const countries = [];
        const wrapper = mount(<PhoneInput countries={countries} />);
        expect(wrapper.find(StyledTrigger).prop('onClick')).toBeDefined();
    });

    it('should not render the dropdown option when only one country is passed', () => {
        const countries = ['mx'];
        const wrapper = mount(<PhoneInput countries={countries} />);
        expect(wrapper.find(StyledTrigger).prop('onClick')).toBe(undefined);
    });

    it('should render the dropdown option when an array containing empty string is passed', () => {
        const countries = [''];
        const wrapper = mount(<PhoneInput countries={countries} />);
        expect(wrapper.find(StyledTrigger).prop('onClick')).toBeDefined;
    });

    it('should render the dropdown option when an array containing invalid country code is passed', () => {
        const countries = [!/^w{2}$/];
        const wrapper = mount(<PhoneInput countries={countries} />);
        expect(wrapper.find(StyledTrigger).prop('onClick')).toBeDefined;
    });
});
