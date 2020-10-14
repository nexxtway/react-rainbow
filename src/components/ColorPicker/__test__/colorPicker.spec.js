import React from 'react';
import { mount } from 'enzyme';
import ColorPicker from '..';
import * as Commons from '../commons';

describe('<ColorPicker />', () => {
    it('should render all common component', () => {
        const wrapper = mount(<ColorPicker />);
        const componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba', 'DefaultColors'];

        componets.forEach(component => {
            expect(wrapper.find(Commons[component]).length).toBe(1);
        });
    });

    it('should render all common component variant is not valid', () => {
        const wrapper = mount(<ColorPicker variant="foo" />);
        const componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba', 'DefaultColors'];

        componets.forEach(component => {
            expect(wrapper.find(Commons[component]).length).toBe(1);
        });
    });

    it('should not render DefaultColors common component when defaultColors do not have some valid color', () => {
        const wrapper = mount(<ColorPicker defaultColors={[]} />);
        const componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba'];

        componets.forEach(component => {
            expect(wrapper.find(Commons[component]).length).toBe(1);
        });
        expect(wrapper.find(Commons.DefaultColors).length).toBe(0);
    });

    it('should render only the DefaultColors common component when the variant is colors-fixed', () => {
        const wrapper = mount(<ColorPicker variant="colors-fixed" />);
        const componets = ['Saturation', 'Hue', 'Alpha', 'Hex', 'Rgba'];

        componets.forEach(component => {
            expect(wrapper.find(Commons[component]).length).toBe(0);
        });
        expect(wrapper.find(Commons.DefaultColors).length).toBe(1);
    });
});
