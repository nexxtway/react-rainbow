import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';
import { SELECTABLE_CHECKBOX } from '../../helpers/columns';

const eventMap = {};
document.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
});
const preventDefault = jest.fn();

describe('<Header />', () => {
    it('should set the right class names in th element when sortable and isSelected are passed and is resizable', () => {
        const component = mount(<Header sortable isSelected sortDirection="asc" />);
        expect(component.find('th').prop('className')).toBe(
            'rainbow-table_header rainbow-table_header--resizable rainbow-table_header--sortable rainbow-table_header--selected',
        );
    });
    it('should set the right class names in th element when resizeColumnDisabled is passed', () => {
        const component = mount(<Header resizeColumnDisabled />);
        expect(component.find('th').prop('className')).toBe('rainbow-table_header');
    });
    it('should set scope="col" in th element', () => {
        const component = mount(<Header sortDirection="asc" />);
        expect(component.find('th').prop('scope')).toBe('col');
    });
    it('should set tabIndex={0} in th element when isSelected is passed', () => {
        const component = mount(<Header sortDirection="asc" isSelected />);
        expect(component.find('th').prop('tabIndex')).toBe(0);
    });
    it('should set tabIndex={-1} in th element when isSelected is not passed', () => {
        const component = mount(<Header sortDirection="asc" />);
        expect(component.find('th').prop('tabIndex')).toBe(-1);
    });
    it('should set the right aria-label in th element when the content passed is a string', () => {
        const component = mount(<Header sortDirection="asc" content="header content" />);
        expect(component.find('th').prop('aria-label')).toBe('header content');
    });
    it('should not set any aria-label in th element when the content passed is not a string', () => {
        const component = mount(<Header sortDirection="asc" content={<div />} />);
        expect(component.find('th').prop('aria-label')).toBe(undefined);
    });
    it('should set the right title in the content container element when the content passed is a string', () => {
        const component = mount(<Header sortDirection="asc" content="header content" />);
        expect(component.find('.rainbow-table_header-content').prop('title')).toBe(
            'header content',
        );
    });
    it('should not set any title in the content container element when the content passed is not a string', () => {
        const component = mount(<Header sortDirection="asc" content={<div />} />);
        expect(component.find('.rainbow-table_header-content').prop('title')).toBe(undefined);
    });
    it('should set isResizable to true in ResizeBar component', () => {
        const component = mount(<Header sortDirection="asc" />);
        expect(component.find('ResizeBar').prop('isResizable')).toBe(true);
    });
    it('should set isResizable to false in ResizeBar component when resizeColumnDisabled is passed', () => {
        const component = mount(<Header sortDirection="asc" resizeColumnDisabled />);
        expect(component.find('ResizeBar').prop('isResizable')).toBe(false);
    });
    it('should set isResizable to false in ResizeBar component when type is "action"', () => {
        const component = mount(<Header sortDirection="asc" type="action" />);
        expect(component.find('ResizeBar').prop('isResizable')).toBe(false);
    });
    it('should call onSort with the right data when the header is clicked and sortable is passed', () => {
        const onSortMockFn = jest.fn();
        const component = mount(
            <Header sortable sortDirection="asc" field="email" onSort={onSortMockFn} />,
        );
        const header = component.find('.rainbow-table_header-container');
        header.simulate('click');
        expect(onSortMockFn).toHaveBeenCalledWith(expect.any(Object), 'email', 'asc');
    });
    it('should not call onSort when sortable is not passed', () => {
        const onSortMockFn = jest.fn();
        const component = mount(<Header sortDirection="asc" onSort={onSortMockFn} />);
        const header = component.find('.rainbow-table_header-container');
        header.simulate('click');
        expect(onSortMockFn).not.toHaveBeenCalled();
    });
    it('should call onResize with the right data when resize the column', () => {
        const onResizeMockFn = jest.fn();
        const component = mount(
            <Header sortDirection="asc" colIndex={2} onResize={onResizeMockFn} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 133, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(onResizeMockFn).toHaveBeenCalledWith(33, 2);
    });
    it('should render SelectableHeader component when type passed is "SELECTABLE_CHECKBOX"', () => {
        const component = mount(<Header type={SELECTABLE_CHECKBOX} />);
        expect(component.find('SelectableHeader').exists()).toBe(true);
    });
});
