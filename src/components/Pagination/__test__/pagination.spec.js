import React from 'react';
import { mount } from 'enzyme';
import Pagination from '../';

describe('<Pagination />', () => {
    it('should disable the previous button if the active page is the first', () => {
        const component = mount(<Pagination pages={5} activePage={1} />);
        const navButtons = component.find('NavigationButton');
        expect(navButtons.get(0).props.disabled).toBe(true);
    });
    it('should disable the next button if the active page is the last', () => {
        const component = mount(<Pagination pages={5} activePage={5} />);
        const navButtons = component.find('NavigationButton');
        expect(navButtons.get(1).props.disabled).toBe(true);
    });
});

