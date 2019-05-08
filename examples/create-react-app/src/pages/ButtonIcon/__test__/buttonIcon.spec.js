import React from 'react';
import { shallow } from 'enzyme';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import ButtonIconExample from './../';

describe('<ButtonIconExample/>', () => {
    it('should render the ButtonIcon', () => {
        const component = shallow(<ButtonIconExample />);
        expect(component.find(ButtonIcon).exists()).toBe(true);
    });
});
