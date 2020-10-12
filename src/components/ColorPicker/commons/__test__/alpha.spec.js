import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { Alpha } from '..';

describe('<Alpha />', () => {
    it('should fire onChange with object containing the new alpha', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            rgba: [0, 0, 0, 1],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Alpha />
            </Provider>,
        );

        wrapper
            .find('input[type="range"]')
            .first()
            .simulate('change', { target: { value: 1 } });
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith(
            expect.objectContaining({
                rgba: [0, 0, 0, 0.01],
            }),
        );
    });

    it('should fire onChange with object containing the default alpha', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            rgba: [0, 0, 0, 0.5],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Alpha />
            </Provider>,
        );

        wrapper
            .find('input[type="range"]')
            .first()
            .simulate('change', { target: { value: 'foo' } });
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith(
            expect.objectContaining({
                rgba: [0, 0, 0, 1],
            }),
        );
    });
});
