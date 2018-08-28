import React from 'react';
import { shallow } from 'enzyme';
import Avatar from 'react-slds/components/Avatar';
import AvatarExample from './../';

describe('<AvatarExample/>', () => {
    it('should render the avatar', () => {
        const component = shallow(
            <AvatarExample />,
        );
        expect(component.find(Avatar).exists()).toBe(true);
    });
});
