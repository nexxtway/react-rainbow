import React from 'react';
import { mount } from 'enzyme';
import Counter from '../counter';

jest.mock('../helpers/abbreviateNumber', () => total => `${total}k`);

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

    it('should call abbreviateNumber with the total of avatars and should render that number in the text', () => {
        const component = mount(<Counter avatars={avatars} />);
        expect(component.find(Counter).text()).toBe('4k');
    });
});
