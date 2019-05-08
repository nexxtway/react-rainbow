import React from 'react';
import { mount } from 'enzyme';
import MenuContent from './../menuContent';

describe('<MenuContent/>', () => {
    it('should render the Spinner when isLoading is true', () => {
        const component = mount(
            <MenuContent isLoading>
                <span />
            </MenuContent>,
        );
        expect(component.find('Spinner').exists()).toBe(true);
    });
    it('should pass the right props to Spinner when isLoading is true', () => {
        const component = mount(
            <MenuContent isLoading>
                <span />
            </MenuContent>,
        );
        expect(component.find('Spinner').props()).toEqual(
            expect.objectContaining({
                assistiveText: 'loading menu',
                isVisible: true,
                size: 'small',
            }),
        );
    });
    it('should render the children passed when isLoading is false', () => {
        const component = mount(
            <MenuContent isLoading={false}>
                <span>content</span>
            </MenuContent>,
        );
        expect(component.find('Spinner').exists()).toBe(false);
        expect(component.find('span').text()).toBe('content');
    });
});
