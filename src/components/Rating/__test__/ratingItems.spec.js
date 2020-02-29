import React from 'react';
import { mount } from 'enzyme';
import RatingItems from '../ratingItems';

describe('<RatingItems />', () => {
    it('should pass the right props to the Star component', () => {
        const component = mount(<RatingItems value="1" name="name-1" onChange={() => {}} />);
        expect(component.childAt(0).props()).toEqual({
            value: 1,
            name: 'name-1',
            onChange: expect.any(Function),
            isFilled: true,
            isHalf: false,
            readOnly: false,
        });
    });
    it('should render the right amount of Star components', () => {
        const component = mount(<RatingItems />);
        expect(component.children().length).toBe(5);
    });
    it('should set isHalf to true when the value passed is not integer and readOnly is true', () => {
        const component = mount(<RatingItems value="3.5" readOnly />);
        const star = component.childAt(3);
        expect(star.props().isHalf).toBe(true);
    });
    it('should set isHalf to false when readOnly is false', () => {
        const component = mount(<RatingItems value="3.5" />);
        const star = component.childAt(3);
        expect(star.props().isHalf).toBe(false);
    });
    it('should pass the right isFilled when the value passed is float', () => {
        const component = mount(<RatingItems value="3.5" />);
        const star = component.childAt(3);
        expect(star.props().isFilled).toBe(true);
    });
});
