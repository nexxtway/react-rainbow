import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';

describe('<Header/>', () => {
    it('should not render the header container when nothing is passed', () => {
        const component = mount(
            <Header />,
        );
        expect(component.find('.rainbow-card__header-container').exists()).toBe(false);
    });

    it('should render the header container when title is passed', () => {
        const component = mount(
            <Header title="my title" />,
        );
        expect(component.find('.rainbow-card__header-container').exists()).toBe(true);
    });
});
