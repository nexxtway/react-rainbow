import React from 'react';
import { shallow } from 'enzyme';
import Button from 'react-rainbow-components/components/Button';
import ButtonExample from './../';

describe('<ButtonExample/>', () => {
    it('should render the Button', () => {
        const component = shallow(
            <ButtonExample />,
        );
        expect(component.find(Button).exists()).toBe(true);
    });
});
