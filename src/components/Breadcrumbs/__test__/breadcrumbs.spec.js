import React from 'react';
import { mount } from 'enzyme';
import Breadcrumbs from './../index';
import Breadcrumb from './../../Breadcrumb/index';

describe('<Breadcrumbs/>', () => {
    it('should have a aria-label attribute for accessibility', () => {
        const component = mount(
            <Breadcrumbs>
                <Breadcrumb label="Parent entity" />
            </Breadcrumbs>,
        );

        expect(component.find('[aria-label="Breadcrumbs"]').exists()).toBe(true);
    });
    it('should render the children passed', () => {
        const component = mount(
            <Breadcrumbs>
                <span />
            </Breadcrumbs>,
        );

        expect(component.find('span').exists()).toBe(true);
    });
});
