import React from 'react';
import { mount } from 'enzyme';
import CardBody from './../cardBody';
import Spinner from '../../Spinner';

describe('<CardBody/>', () => {
    it('should render the Spinner when isLoading is passed', () => {
        const component = mount(<CardBody isLoading>Test</CardBody>);
        expect(component.find(Spinner).exists()).toBe(true);
    });
    it('should not render the Spinner when isLoading is not passed', () => {
        const component = mount(<CardBody>Test</CardBody>);
        expect(component.find(Spinner).exists()).toBe(false);
    });
    it('should render the children when isLoading is not passed', () => {
        const component = mount(
            <CardBody>
                <div>Test</div>
            </CardBody>,
        );
        expect(component.text()).toBe('Test');
    });
    it('should not render the children when isLoading is passed', () => {
        const component = mount(<CardBody isLoading>Test</CardBody>);
        expect(component.text()).toBeFalsy();
    });
});
