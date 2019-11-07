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
    it('should set aria-label to pagination', () => {
        const component = mount(<Pagination pages={5} activePage={1} />);
        expect(component.find('nav').prop('aria-label')).toBe('pagination');
    });
    it('should call the onClick function with the right arguments when the previous page button is clicked', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<Pagination pages={5} activePage={5} onChange={onChangeMockFn} />);
        const previousButton = component.find('button[data-id="previous-page-button"]');
        previousButton.simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(expect.any(Object), 4);
    });
    it('should call the onClick function with the right arguments when the next page button is clicked', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<Pagination pages={5} activePage={1} onChange={onChangeMockFn} />);
        const previousButton = component.find('button[data-id="next-page-button"]');
        previousButton.simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(expect.any(Object), 2);
    });
});
