import React from 'react';
import { shallow } from 'enzyme';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import SignInExample from './../';

describe('<SignInExample/>', () => {
    it('should render the SignIn', () => {
        const component = shallow(<SignInExample />);
        expect(component.find(Card).exists()).toBe(true);
        expect(component.find(Button).exists()).toBe(true);
        expect(component.find(Input).exists()).toBe(true);
    });
});
