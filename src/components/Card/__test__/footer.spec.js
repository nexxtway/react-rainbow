import React from 'react';
import { mount } from 'enzyme';
import Footer from './../footer';

describe('<Footer/>', () => {
    it('should render the footer node when footer is passed', () => {
        const component = mount(
            <Footer content={<div>my footer</div>} />,
        );
        expect(component.find('.slds-card__footer').text()).toBe('my footer');
    });
});
