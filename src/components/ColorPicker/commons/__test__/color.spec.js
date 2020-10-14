import React from 'react';
import { mount } from 'enzyme';
import Color from '../defaultColors/color';

describe('<Color />', () => {
    it('should fire onChange with object containing the new color', () => {
        const onChangeMockFn = jest.fn();
        const wrapper = mount(<Color color="#000000" onChange={onChangeMockFn} />);

        expect(
            wrapper
                .find('label')
                .first()
                .prop('style'),
        ).toStrictEqual({ backgroundColor: '#000000' });
        wrapper
            .find('input[type="radio"]')
            .first()
            .simulate('change', { target: { checked: true } });
        wrapper.update();

        expect(onChangeMockFn).toHaveBeenCalledWith({
            hex: '#000000',
            rgba: [0, 0, 0, 1],
            hsv: [0, 0, 0],
        });
    });

    it('should return null when the color is not valid', () => {
        const wrapper = mount(<Color color="foo" />);
        expect(wrapper.children().length).toBe(0);
    });
});
