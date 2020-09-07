import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import Saturation from '../saturation';
import { StyledColor, StyledCircle } from '../saturation/styled';
import { RIGHT_KEY, DOWN_KEY, LEFT_KEY, UP_KEY } from '../../../../libs/constants';

jest.mock('../saturation/helpers/calculateBright', () => () => 100);
jest.mock('../saturation/helpers/calculateSaturation', () => () => 100);

describe('<Saturation />', () => {
    it('should fire onChange with object containing the new color', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            rgba: [0, 0, 0, 1],
            hsv: [0, 0, 0],
            onChange: onChangeMockFn,
        };
        const wrapper = mount(
            <Provider value={context}>
                <Saturation />
            </Provider>,
        );

        wrapper
            .find(StyledColor)
            .first()
            .simulate('mousedown');
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith({
            hex: '#ff0000',
            hsv: [0, 100, 100],
            rgba: [255, 0, 0, 1],
        });
    });

    it('should render the pointer in the right position', () => {
        const context = {
            rgba: [0, 0, 0, 1],
            hsv: [0, 0, 0],
        };
        const wrapper = mount(
            <Provider value={context}>
                <Saturation />
            </Provider>,
        );

        expect(
            wrapper
                .find(StyledCircle)
                .first()
                .prop('style'),
        ).toEqual({ top: '100%', left: '0%' });
    });

    it('should fire onChange with object containing the new color when using keyboard', () => {
        const onChangeMockFn = jest.fn();
        const context = {
            rgba: [0, 0, 0, 1],
            hsv: [0, 0, 0],
            onChange: onChangeMockFn,
        };
        const values = [
            { key: RIGHT_KEY, result: [0, 1, 0] },
            { key: UP_KEY, result: [0, 1, 1] },
            { key: LEFT_KEY, result: [0, 0, 1] },
            { key: DOWN_KEY, result: [0, 0, 0] },
        ];
        const wrapper = mount(
            <Provider value={context}>
                <Saturation />
            </Provider>,
        );

        wrapper
            .find(StyledCircle)
            .first()
            .simulate('focus');
        wrapper.update();

        values.forEach(({ key, result }) => {
            wrapper
                .find(StyledColor)
                .first()
                .simulate('keydown', { keyCode: key });
            wrapper.update();

            expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({ hsv: result }));
        });
    });
});
