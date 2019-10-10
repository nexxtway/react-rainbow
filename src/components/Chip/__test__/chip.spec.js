import React from 'react';
import { mount } from 'enzyme';
import Chip from '..';

describe('<Chip/>', () => {
    it('should set the label passed', () => {
        const component = mount(<Chip label="testing Chip" />);
        expect(component.text()).toBe('testing Chip');
    });
    it('should fire an event when the close button is clicked', () => {
        const onDeleteMockFn = jest.fn();
        const component = mount(<Chip onDelete={onDeleteMockFn} />);
        component.find('button').simulate('click');
        expect(onDeleteMockFn).toHaveBeenCalledWith(expect.any(Object));
    });
    it('should set isTrue in RenderIf to true when onDelete is passed', () => {
        const component = mount(<Chip onDelete={() => {}} />);
        expect(component.find('RenderIf').prop('isTrue')).toBe(true);
    });
    it(' should set isTrue in RenderIf to false when onDelete is not passed', () => {
        const component = mount(<Chip label="testing Chip" />);
        expect(component.find('RenderIf').prop('isTrue')).toBe(false);
    });
});
