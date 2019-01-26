import React from 'react';
import { mount } from 'enzyme';
import ResizeBar from '../resizeBar';

const eventMap = {};

const headerRef = {
    current: {
        getBoundingClientRect() {
            return {
                width: 200,
            };
        },
    },
};

document.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
});

describe('<ResizeBar />', () => {
    it('should set isResizable passed to isTrue in RenderIf component', () => {
        const component = mount(
            <ResizeBar isResizable />,
        );
        expect(component.find('RenderIf').prop('isTrue')).toBe(true);
    });
    it('should handle onMouseDown event when headerWidth is not passed', () => {
        const component = mount(
            <ResizeBar isResizable headerRef={headerRef} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });

        expect(component.instance().headerWidth).toBe(200);
        expect(component.instance().startXPosition).toBe(100);
    });
    it('should handle onMouseDown event when headerWidth is passed', () => {
        const component = mount(
            <ResizeBar isResizable headerWidth={350} headerRef={headerRef} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 230 });

        expect(component.instance().headerWidth).toBe(350);
        expect(component.instance().startXPosition).toBe(230);
    });
    it('should handle onMouseMove event', () => {
        const component = mount(
            <ResizeBar
                isResizable
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 200, preventDefault: jest.fn() });

        expect(component.instance().newXPosition).toBe(100);
    });
    it('should handle onMouseMove event and set newXposition to 1000 if the new width is bigger than 1000', () => {
        const component = mount(
            <ResizeBar
                isResizable
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 2000, preventDefault: jest.fn() });

        expect(component.instance().newXPosition).toBe(800);
    });
    it('should handle onMouseMove event and set newXposition to 50 if the new width is smaller than 50', () => {
        const component = mount(
            <ResizeBar
                isResizable
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: -2000, preventDefault: jest.fn() });

        expect(component.instance().newXPosition).toBe(-150);
    });
    it('should set the right state when handle onMouseMove event', () => {
        const component = mount(
            <ResizeBar
                isResizable
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        expect(component.state()).toEqual({ resizeBarStyle: { willChange: 'transform' } });
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 150, preventDefault: jest.fn() });

        expect(component.state()).toEqual({
            resizeBarStyle: {
                willChange: 'transform',
                transform: 'translateX(50px)',
            },
        });
    });
    it('should set the right state when handle onMouseUp event', () => {
        const component = mount(
            <ResizeBar
                isResizable
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 150, preventDefault: jest.fn() });
        eventMap.mouseup({ preventDefault: jest.fn() });

        expect(component.state()).toEqual({ resizeBarStyle: { willChange: 'transform' } });
    });
    it('should call onResize with the right data', () => {
        const onResizeMock = jest.fn();
        const component = mount(
            <ResizeBar
                isResizable
                onResize={onResizeMock}
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 150, preventDefault: jest.fn() });
        eventMap.mouseup({ preventDefault: jest.fn() });

        expect(onResizeMock).toHaveBeenCalledWith(250, 50);
    });
    it('should call onResize with the right data when the new width is less than minColumnWidth', () => {
        const onResizeMock = jest.fn();
        const component = mount(
            <ResizeBar
                isResizable
                onResize={onResizeMock}
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: -80, preventDefault: jest.fn() });
        eventMap.mouseup({ preventDefault: jest.fn() });

        expect(onResizeMock).toHaveBeenCalledWith(50, -150);
    });
    it('should call onResize with the right data when the new width is more than maxColumnWidth', () => {
        const onResizeMock = jest.fn();
        const component = mount(
            <ResizeBar
                isResizable
                onResize={onResizeMock}
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000} />,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 1350, preventDefault: jest.fn() });
        eventMap.mouseup({ preventDefault: jest.fn() });

        expect(onResizeMock).toHaveBeenCalledWith(1000, 800);
    });
});
