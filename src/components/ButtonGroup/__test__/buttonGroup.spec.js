import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ButtonGroup from './../index';
import Button from './../../Button';

describe('<ButtonGroup/>', () => {
    it('should render the right markup with the right classes', () => {
        const component = renderer.create(
            <ButtonGroup>
                <Button label="Refresh" />
                <Button label="Edit" />
                <Button label="Save" />
            </ButtonGroup>,
        );

        expect(component).toMatchSnapshot();
    });

    it('should be accessible, the div element should have role="group"', () => {
        const component = shallow(
            <ButtonGroup>
                <Button label="Refresh" />
                <Button label="Edit" />
                <Button label="Save" />
            </ButtonGroup>,
        );

        expect(component.find('div[role="group"]').exists()).toBe(true);
    });
});
