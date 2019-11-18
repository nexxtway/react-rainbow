import React from 'react';
import { mount } from 'enzyme';
import ResizeBar from '../resizeBar';

const resizeBarSelector = 'span.rainbow-table_header-resize-bar';

const eventMap = {};
document.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
});

const preventDefault = jest.fn();

describe('<ResizeBar />', () => {
    it('should set isResizable passed to isTrue in RenderIf component', () => {
        const component = mount(<ResizeBar isResizable />);
        expect(component.find('RenderIf').prop('isTrue')).toBe(true);
    });
    it('should pass the right props to input element', () => {
        const component = mount(
            <ResizeBar
                isResizable
                ariaLabel="resize bar aria label"
                minColumnWidth={30}
                maxColumnWidth={120}
            />,
        );
        expect(component.find('input').props()).toEqual(
            expect.objectContaining({
                type: 'range',
                min: 30,
                max: 120,
                'aria-label': 'resize bar aria label',
                tabIndex: -1,
            }),
        );
    });
    it('should handle onMouseDown event', () => {
        const component = mount(<ResizeBar isResizable headerWidth={350} />);
        const resizeBar = component.find(resizeBarSelector);
        resizeBar.simulate('mousedown', { clientX: 230 });

        expect(component.instance().startXPosition).toBe(230);
    });
    it('should handle onMouseMove event', () => {
        const component = mount(
            <ResizeBar isResizable headerWidth={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find(resizeBarSelector);
        resizeBar.simulate('mousedown', { clientX: 120 });
        eventMap.mousemove({ clientX: 200, preventDefault });

        expect(component.instance().newXPosition).toBe(80);
    });
    it('should handle onMouseMove event and set newXposition to 800 if the new width is bigger than 1000', () => {
        const component = mount(
            <ResizeBar isResizable headerWidth={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find(resizeBarSelector);
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 2000, preventDefault });

        expect(component.instance().newXPosition).toBe(800);
    });
    it('should handle onMouseMove event and set newXposition to -150 if the new width is smaller than 50', () => {
        const component = mount(
            <ResizeBar isResizable headerWidth={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find(resizeBarSelector);
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: -2000, preventDefault });

        expect(component.instance().newXPosition).toBe(-150);
    });
    it('should set the right state when handle onMouseMove event', () => {
        const component = mount(
            <ResizeBar isResizable headerWidth={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find(resizeBarSelector);
        expect(component.state()).toEqual({
            resizeBarStyle: { willChange: 'transform' },
        });
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 150, preventDefault });

        expect(component.state()).toEqual({
            resizeBarStyle: {
                transform: 'translateX(50px)',
                willChange: 'transform',
            },
        });
    });
    it('should call onResize with the right data when handle onMouseUp event', () => {
        const onResizeMock = jest.fn();
        const component = mount(
            <ResizeBar
                isResizable
                onResize={onResizeMock}
                headerWidth={200}
                minColumnWidth={50}
                maxColumnWidth={1000}
            />,
        );
        const resizeBar = component.find(resizeBarSelector);
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 150, preventDefault });
        eventMap.mouseup({ preventDefault });

        expect(onResizeMock).toHaveBeenCalledWith(50);
    });
    it('should set the right state when handle onMouseUp event', () => {
        const component = mount(
            <ResizeBar isResizable headerWidth={200} minColumnWidth={50} maxColumnWidth={1000} />,
        );
        const resizeBar = component.find(resizeBarSelector);
        resizeBar.simulate('mousedown', { clientX: 100 });
        eventMap.mousemove({ clientX: 150, preventDefault });
        eventMap.mouseup({ preventDefault });

        expect(component.state()).toEqual({
            resizeBarStyle: { willChange: 'transform' },
        });
    });
});
