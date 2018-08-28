import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from 'react-slds/components/ButtonGroup';
import Button from 'react-slds/components/Button';
import ButtonGroupExample from './../';

describe('<ButtonGroupExample/>', () => {
    it('should render the ButtonGroup', () => {
        const component = shallow(
            <ButtonGroupExample />,
        );
        expect(component.find(ButtonGroup).exists()).toBe(true);
        expect(component.find(Button).exists()).toBe(true);
    });
});
