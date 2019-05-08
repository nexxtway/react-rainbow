import React from 'react';
import { mount } from 'enzyme';
import MenuItem from '../../../MenuItem';
import ActionsCell from '../actionsCell';

const columnChildren = [<MenuItem />, <MenuItem />];

describe('<ActionsCell />', () => {
    it('should not render anything when columnChildren is not passed', () => {
        const component = mount(<ActionsCell />);
        expect(component.children().length).toBe(0);
    });
    it('should render the menu items passed as columnChildren', () => {
        const component = mount(
            <ActionsCell columnChildren={columnChildren} rowsLength={3} rowIndex={1} />,
        );
        expect(component.find(MenuItem).length).toBe(2);
    });
    it('should render only one menu item', () => {
        const singleColumnChild = <MenuItem />;
        const component = mount(
            <ActionsCell columnChildren={singleColumnChild} rowsLength={3} rowIndex={1} />,
        );
        expect(component.find(MenuItem).length).toBe(1);
    });
    it('should set the menuAlignment to "right" in ButtonMenu component', () => {
        const values = [1, 2, 3, 4, 5];
        values.forEach(value => {
            const component = mount(
                <ActionsCell columnChildren={columnChildren} rowsLength={value} rowIndex={1} />,
            );
            expect(component.find('ButtonMenu').prop('menuAlignment')).toBe('right');
        });
    });
    it('should set the menuAlignment to "bottom-right" in ButtonMenu component', () => {
        const values = [4, 5, 6];
        values.forEach(value => {
            const component = mount(
                <ActionsCell columnChildren={columnChildren} rowsLength={value} rowIndex={3} />,
            );
            expect(component.find('ButtonMenu').prop('menuAlignment')).toBe('bottom-right');
        });
    });
    it('should not render any MenuItem when columnChildren are invalid', () => {
        const values = [[], ['asd'], [123]];
        values.forEach(value => {
            const component = mount(
                <ActionsCell columnChildren={value} rowsLength={3} rowIndex={1} />,
            );
            expect(component.find(MenuItem).length).toBe(0);
        });
    });
    it('should fire an event when a MenuItem is clicked', () => {
        const onClickMockFn = jest.fn();
        const menuItemsChildren = [<MenuItem onClick={onClickMockFn} />, <MenuItem />];
        const rowData = {
            name: 'John',
            email: 'john@gmail.com',
        };
        const component = mount(
            <ActionsCell
                columnChildren={menuItemsChildren}
                rowsLength={3}
                rowIndex={1}
                rowData={rowData}
            />,
        );
        component
            .find(MenuItem)
            .at(0)
            .simulate('click');
        expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object), {
            name: 'John',
            email: 'john@gmail.com',
        });
    });
});
