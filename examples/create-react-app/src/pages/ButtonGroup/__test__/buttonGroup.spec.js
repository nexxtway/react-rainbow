import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import Button from 'react-rainbow-components/components/Button';
import ButtonGroupExample from './../';

describe('<ButtonGroupExample/>', () => {
    it('should render the ButtonGroup', () => {
        const component = shallow(<ButtonGroupExample />);
        expect(component.find(ButtonGroup).exists()).toBe(true);
        expect(component.find(Button).exists()).toBe(true);
    });
});
