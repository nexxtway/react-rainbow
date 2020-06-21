import React from 'react';
import { mount } from 'enzyme';
import { axe } from 'jest-axe';
import MultiSelect from '..';
import Option from '../../Option';

describe('<MultiSelect/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const value = [
            {
                label: 'First',
                name: 'first',
            },
            {
                label: 'Second',
                name: 'second',
            },
        ];
        const component = mount(
            <MultiSelect value={value} label="Label">
                <Option name="first" label="First" />
                <Option name="second" label="Second" />
            </MultiSelect>,
        );
        const html = component.html();
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
