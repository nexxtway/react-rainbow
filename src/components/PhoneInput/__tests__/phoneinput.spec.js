import React from 'react';
import { mount } from 'enzyme';
import PhoneInput from '..';
import { StyledTrigger } from '../styled';

describe('<PhoneInput />', () => {
    it('should fire onChange with the right value', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<PhoneInput label="Phone Number" onChange={onChangeMockFn} />);
        component.find('input[type="tel"]').simulate('change', { target: { value: '12345678' } });
        expect(onChangeMockFn).toHaveBeenCalledWith({
            countryCode: '+1',
            isoCode: 'us',
            phone: '12345678',
        });
    });
    it('should fire onFocus with the right value', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(<PhoneInput label="Phone Number" onFocus={onFocusMockFn} />);
        component.find('input[type="tel"]').simulate('focus');
        expect(true).toBe(true);
        expect(onFocusMockFn).toHaveBeenCalledWith({
            countryCode: '+1',
            isoCode: 'us',
            phone: '',
        });
    });
    it('should fire onBlur with the right value', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<PhoneInput label="Phone Number" onBlur={onBlurMockFn} />);
        component.find('input[type="tel"]').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith({
            countryCode: '+1',
            isoCode: 'us',
            phone: '',
        });
    });
    it('should fire onFocus with the right value when has an initial value', () => {
        const onFocusMockFn = jest.fn();
        const value = {
            countryCode: '+52',
            isoCode: 'mx',
            phone: '1234',
        };
        const component = mount(
            <PhoneInput label="Phone Number" value={value} onFocus={onFocusMockFn} />,
        );
        component.find('input[type="tel"]').simulate('focus');
        expect(true).toBe(true);
        expect(onFocusMockFn).toHaveBeenCalledWith({
            countryCode: '+52',
            isoCode: 'mx',
            phone: '1234',
        });
    });
    it('should fire onBlur with the right value when has an initial value', () => {
        const onBlurMockFn = jest.fn();
        const value = {
            countryCode: '+53',
            isoCode: 'cu',
            phone: '12345',
        };
        const component = mount(
            <PhoneInput label="Phone Number" value={value} onBlur={onBlurMockFn} />,
        );
        component.find('input[type="tel"]').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith({
            countryCode: '+53',
            isoCode: 'cu',
            phone: '12345',
        });
    });
    it('should accept only numbers.', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<PhoneInput label="Phone Number" onChange={onChangeMockFn} />);

        component
            .find('input[type="tel"]')
            .simulate('change', { target: { value: 'Your phone number is 0987256983' } });

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
});
