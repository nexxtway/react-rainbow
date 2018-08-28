import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from 'react-slds/components/Breadcrumbs';
import Breadcrumb from 'react-slds/components/Breadcrumb';
import BreadcrumbsExample from './../';

describe('<BreadcrumbsExample/>', () => {
    it('should render the Breadcrumbs', () => {
        const component = shallow(
            <BreadcrumbsExample />,
        );
        expect(component.find(Breadcrumbs).exists()).toBe(true);
        expect(component.find(Breadcrumb).exists()).toBe(true);
    });
});
