import React from 'react';
import { mount } from 'enzyme';
import ButtonGroup from './../index';
import Button from './../../Button';

describe('<ButtonGroup/>', () => {
    it('should be accessible, the div element should have role="group"', () => {
        const component = mount(
            <ButtonGroup>
                <Button label="Refresh" />
                <Button label="Edit" />
                <Button label="Save" />
            </ButtonGroup>,
        );

        expect(component.find('div[role="group"]').exists()).toBe(true);
    });
    it('should render the amount of children passed', () => {
        const component = mount(
            <ButtonGroup>
                <Button label="Refresh" />
                <Button label="Edit" />
                <Button label="Save" />
            </ButtonGroup>,
        );

        expect(component.prop('children').length).toBe(3);
    });
});
