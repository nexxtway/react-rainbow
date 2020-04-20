import React from 'react';
import { mount } from 'enzyme';
import Counter from '../counter';

jest.mock('../../../libs/utils/getSuffixSI', () => total => `${total}k`);

describe('<Counter />', () => {
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

    it('should render the right total number of avatars', () => {
        const component = mount(<Counter avatars={avatars} />);
        expect(component.find(Counter).text()).toBe('4k');
    });
});
