import React from 'react';
import { shallow } from 'enzyme';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import CheckboxToggle from 'react-rainbow-components/components/CheckboxToggle';
import Select from 'react-rainbow-components/components/Select';
import CheckoutExample from '..';

describe('<CheckoutExample/>', () => {
    it('should render the Checkout', () => {
        const component = shallow(
            <CheckoutExample />,
        );
        expect(component.find(Card).exists()).toBe(true);
        expect(component.find(Button).exists()).toBe(true);
        expect(component.find(Input).exists()).toBe(true);
        expect(component.find(CheckboxToggle).exists()).toBe(true);
        expect(component.find(Select).exists()).toBe(true);
    });
});
