import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { Rgba } from '..';

describe('<Rgba />', () => {
    it('should fire onChange with object containing the new alpha', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            rgba: [0, 0, 0, 1],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Rgba />
            </Provider>,
        );

        const result = [0, 0, 0, 1];
        const values = [255, 255, 255, 0.5];

        values.forEach((value, index) => {
            result[index] = value;
            const normalizeValue = index === 3 ? value * 100 : value;
            wrapper
                .find('input[type="number"]')
                .at(index)
                .simulate('change', { target: { value: normalizeValue } });
            wrapper.update();

            expect(onChangeMockFn).toHaveBeenCalledWith(
                expect.objectContaining({
                    rgba: result,
                }),
            );
        });
    });

    it('should fire onChange with object containing the default alpha', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            rgba: [0, 0, 0, 0.5],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Rgba />
            </Provider>,
        );

        wrapper
            .find('input[type="number"]')
            .at(3)
            .simulate('change', { target: { value: 'foo' } });
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith(
            expect.objectContaining({
                rgba: [0, 0, 0, 0],
            }),
        );
    });

    it('should fire onChange with object containing the default component color', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            rgba: [255, 0, 0, 1],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Rgba />
            </Provider>,
        );

        wrapper
            .find('input[type="number"]')
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
