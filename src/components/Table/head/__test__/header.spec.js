import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';

const eventMap = {};

document.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
});

describe('<Header />', () => {
    it('should call onColumnSelect if its clicked', () => {
        const onColumnSelectMock = jest.fn();
        const component = mount(
            <Header
                sortable
                sortDirection="asc"
                columnIndex={0}
                onColumnSelect={onColumnSelectMock} />,
        );
        const clickableHeader = component.find('.rainbow-table_header-container');
        clickableHeader.simulate('click');
        expect(onColumnSelectMock).toHaveBeenCalledWith(expect.any(Object), 0, 'asc');
    });

    it('should handle MouseDownEvent', () => {
        const component = mount(
            <Header isResizable />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });

        expect(component.instance().startXPosition).toBe(100);
    });

    it('should handle MouseMoveEvent', () => {
        const component = mount(
            <Header isResizable width={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 200, preventDefault: jest.fn() });

        expect(component.instance().newXPosition).toBe(100);
    });

    it('should handle MouseMoveEvent and set newXposition to 1000 if the new width is bigger than 1000', () => {
        const component = mount(
            <Header isResizable width={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 2000, preventDefault: jest.fn() });

        expect(component.instance().newXPosition).toBe(800);
    });

    it('should handle MouseMoveEvent and set newXposition to 50 if the new width is smaller than 50', () => {
        const component = mount(
            <Header isResizable width={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: -2000, preventDefault: jest.fn() });

        expect(component.instance().newXPosition).toBe(-150);
    });

    it('should handle MouseMoveEvent and call onResize with the right width', () => {
        const onResizeMock = jest.fn();
        const component = mount(
            <Header
                columnIndex={0}
                isResizable
                onResize={onResizeMock}
                width={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 150, preventDefault: jest.fn() });
        eventMap.mouseup({ preventDefault: jest.fn() });

        expect(onResizeMock).toHaveBeenCalledWith(0, 250);
    });
});
