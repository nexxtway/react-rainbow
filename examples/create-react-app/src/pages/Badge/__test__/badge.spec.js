import React from 'react';
import { shallow } from 'enzyme';
import Badge from 'react-rainbow-components/components/Badge';
import BadgeExample from './../';

describe('<BadgeExample/>', () => {
    it('should render the badge', () => {
        const component = shallow(<BadgeExample />);
        expect(component.find(Badge).exists()).toBe(true);
    });
});
