import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './../index';
import Button from './../../Button';

describe('<ButtonGroup/>', () => {
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
