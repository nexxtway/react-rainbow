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
            filled: true,
        });
    });
    it('should render the right amount of Star components', () => {
        const component = mount(<RatingItems />);
        expect(component.children().length).toBe(5);
    });
});
