import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Breadcrumbs from './../index';
import Breadcrumb from './../../Breadcrumb/index';

describe('<Breadcrumbs/>', () => {
    it('should render a Breadcrumbs with its childrens', () => {
        const component = renderer.create(
            <Breadcrumbs>
                <Breadcrumb label="Parent entity" />
                <Breadcrumb label="Parent record name" />
            </Breadcrumbs>,
        );

        expect(component).toMatchSnapshot();
    });

    it('should have a aria-label attribute for accessibility', () => {
        const component = shallow(
           <Breadcrumbs>
                <Breadcrumb label="Parent entity" />
            </Breadcrumbs>,
        );

        expect(component.find('[aria-label="Breadcrumbs"]').exists()).toBe(true);
    });
});
