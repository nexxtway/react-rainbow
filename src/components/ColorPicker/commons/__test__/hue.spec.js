import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { Hue } from '../';

describe('<Hue />', () => {
    it('should fire onChange with object containing the new hue.', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            hsv: [0, 0, 0],
            rgba: [0, 0, 0, 1],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Hue />
            </Provider>,
        );

        wrapper
            .find('input[type="range"]')
            .first()
            .simulate('change', { target: { value: 100 } });
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith(
            expect.objectContaining({
                hsv: [100, 0, 0],
            }),
        );
    });

    it('should fire onChange with object containing the default hue.', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            hsv: [360, 0, 0],
            rgba: [0, 0, 0, 1],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Hue />
            </Provider>,
        );

        wrapper
            .find('input[type="range"]')
            .first()
            .simulate('change', { target: { value: 'foo' } });
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith(
            expect.objectContaining({
                hsv: [0, 0, 0],
            }),
        );
    });
});
