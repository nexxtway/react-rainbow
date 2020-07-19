import React from 'react';
import { mount } from 'enzyme';
import PhoneInput from '../';

const Wrapper = () => {
    const [value, setValue] = React.useState('');
    return (
        <PhoneInput
            label="Phone Number"
            value={value}
            onChange={setValue}
            placeholder="Enter your phone number"
        />
    );
};

describe('<PhoneInput />', () => {
    it('Should accept only numbers.', () => {
        const wrapper = mount(<Wrapper />);
        wrapper
            .find('input[type="tel"]')
            .first()
            .simulate('change', { target: { value: 'Your phone number is 0987256983' } });
        wrapper.update();
        expect(wrapper.find('input[type="tel"]').prop('value')).toBe('0987256983');
    });
});
