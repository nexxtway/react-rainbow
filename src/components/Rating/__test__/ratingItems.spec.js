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
            isReadOnly: false,
        });
    });
    it('should render the right amount of Star components', () => {
        const component = mount(<RatingItems />);
        expect(component.children().length).toBe(5);
    });
    it('should render half star at the right position when value is a float', () => {
        const component = mount(<RatingItems value="3.5" />);
        const star = component.childAt(3);
        expect(star.find('StarHalf').exists()).toBe(true);
    });
    it('should not render any half star when value is an integer', () => {
        const component = mount(<RatingItems value={'5'} />);
        Array(5)
            .fill(0)
            .forEach((item, index) => {
                expect(
                    component
                        .childAt(index)
                        .find('StarHalf')
                        .exists(),
                ).toBe(false);
            });
    });
});
