import React from 'react';
import { shallow } from 'enzyme';
import Input from 'react-rainbow-components/components/Input';
import InputExample from './../';

describe('<InputExample/>', () => {
    it('should render the Input', () => {
        const component = shallow(<InputExample />);
        expect(component.find(Input).exists()).toBe(true);
    });
});
