import React from 'react';
import { mount } from 'enzyme';
import Marker from '../marker';

describe('<Marker />', () => {
    it('should not render when it is not visible', () => {
        const component = mount(<Marker />);
        expect(component.find('div').exists()).toBe(false);
    });
    it('should have the right class names when it is visible', () => {
        const component = mount(<Marker isVisible />);
        expect(component.find('div').prop('className')).toBe(
            'rainbow-radio-button-group_marker-container',
        );
        expect(component.find('span').prop('className')).toBe('rainbow-radio-button-group_marker');
    });
    it('should set the right position and size', () => {
        const style = { left: 10, width: 100 };
        const component = mount(<Marker isVisible style={style} />);
        expect(component.find('span').prop('style')).toEqual(style);
    });
});
