import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ExpandableSection from './../index';

describe('<ExpandableSection/>', () => {
    it('should the right markup with the right classes', () => {
        const component = renderer.create(
            <ExpandableSection label="Section Title" initiallyExpanded >
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                vitae elit libero, a pharetra augue.
            </ExpandableSection>,
        );

        expect(component).toMatchSnapshot();
    });

    it('should update aria-expanded attribute when expand/collapse', () => {
        const component = shallow(<ExpandableSection label="Header">Some text</ExpandableSection>);
        const button = component.find('button');

        expect(component.find('button[aria-expanded=false]').exists()).toBe(true);
        button.simulate('click');
        expect(component.find('button[aria-expanded=true]').exists()).toBe(true);
    });

    it('should expand when we click on the header and it was collapse', () => {
        const component = shallow(<ExpandableSection label="Header">Some text</ExpandableSection>);
        const button = component.find('button');

        expect(component.find('div.slds-is-open').exists()).toBe(false);
        button.simulate('click');
        expect(component.find('div.slds-is-open').exists()).toBe(true);
    });

    it('should collapse when we click on the header and it was expanded', () => {
        const component = shallow(<ExpandableSection initiallyExpanded label="Header">Some text</ExpandableSection>);
        const button = component.find('button');

        expect(component.find('div.slds-is-open').exists()).toBe(true);
        button.simulate('click');
        expect(component.find('div.slds-is-open').exists()).toBe(false);
    });

    it('should fire onExpandOrCollapse function when the state of the section change', () => {
        const onExpandOrCollapseMockFn = jest.fn();
        const component = shallow(
            <ExpandableSection onExpandOrCollapse={onExpandOrCollapseMockFn} label="Header">
                Some text
            </ExpandableSection>,
        );
        const button = component.find('button');

        button.simulate('click');
        expect(onExpandOrCollapseMockFn.mock.calls.length).toBe(1);
    });

    it('should pass the current state of the section when onExpandOrCollapse function is invoked', () => {
        const callbackMockFn = jest.fn();
        const component = shallow(
            <ExpandableSection onExpandOrCollapse={callbackMockFn} label="Header">
                Some text
            </ExpandableSection>,
        );
        const button = component.find('button');

        button.simulate('click');
        expect(callbackMockFn.mock.calls[0][0].isExpanded).toBe(false);
    });
});
