import React from 'react';
import { mount } from 'enzyme';
import Avatars from '../avatars';
import Avatar from '../../Avatar';

describe('<Avatars />', () => {
    const avatars = [
        {
            src: 'images/user/user1.jpg',
            assistiveText: 'Jose Leandro',
            title: 'Jose Leandro',
        },
        {
            src: 'images/user/user2.jpg',
            assistiveText: 'Tahimi Leon',
            title: 'Tahimi Leon',
        },
        {
            src: 'images/user/user3.jpg',
            assistiveText: 'Carlos Miguel',
            title: 'Carlos Miguel',
        },
        {
            src: 'images/user/user4.jpg',
            assistiveText: 'Jane Doe',
            title: 'Jane Doe',
        },
    ];

    it('should render default amount (3) of Avatar components when none maxAvatars is passed', () => {
        const component = mount(<Avatars avatars={avatars} />);
        expect(component.find(Avatar)).toHaveLength(3);
    });
    it('should render right amount of Avatar components when maxAvatars is passed', () => {
        const component = mount(<Avatars avatars={avatars} maxAvatars={4} />);
        expect(component.find(Avatar)).toHaveLength(4);
    });
    it('should Avatar components have the right props passed', () => {
        const component = mount(<Avatars avatars={avatars} />);
        const zIndexes = ['3', '2', '1'];
        component.find(Avatar).forEach((avatar, idx) => {
            expect(avatar.props().zIndex).toBe(zIndexes[idx]);
        });
    });
});
