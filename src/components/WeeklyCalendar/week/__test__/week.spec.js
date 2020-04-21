import React from 'react';
import { mount } from 'enzyme';
import Week from '..';

const week = new Date(2020, 3, 5);
describe('<Week />', () => {
    it('should render the 7 days of the week', () => {
        const wrapper = mount(<Week week={week} />);
        expect(wrapper.find('Days').children().length).toBe(7);
    });

    it('should render the 24 hours of the day', () => {
        const wrapper = mount(<Week week={week} />);
        expect(wrapper.find('GridLines').children().length).toBe(24);
    });
});
