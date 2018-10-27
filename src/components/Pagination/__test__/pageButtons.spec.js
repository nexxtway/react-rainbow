import React from 'react';
import { mount } from 'enzyme';
import PageButtons from '../pageButtons';

describe('<PageButtons />', () => {
    it('should render 5 children if pages is grater than 4', () => {
        const component = mount(<PageButtons pages={7} onChange={() => {}} activePage={3} />);
        const buttons = component.find('li');
        expect(buttons.length).toBe(5);
    });
    it('should render as many children as pages if pages is less than 4', () => {
        const component = mount(<PageButtons pages={4} onChange={() => {}} activePage={3} />);
        const buttons = component.find('li');
        expect(buttons.length).toBe(4);
    });
    it('should set the right className to the active page button', () => {
        const component = mount(<PageButtons pages={7} onChange={() => {}} activePage={3} />);
        const pageButtons = component.find('li.rainbow-pagination_button');
        expect(pageButtons.get(2).props.className).toBe('rainbow-pagination_button rainbow-pagination_button--active');
    });
    it('should set aria-current to "page" to the active anchor element', () => {
        const component = mount(<PageButtons pages={7} onChange={() => {}} activePage={3} />);
        const pageButtons = component.find('a');
        expect(pageButtons.get(2).props['aria-current']).toBe('page');
    });
    it('should call onChange if a page button is clicked', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<PageButtons pages={1} onChange={onChangeMockFn} activePage={1} />);
        const anchor = component.find('a');
        anchor.simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledTimes(1);
    });
});
