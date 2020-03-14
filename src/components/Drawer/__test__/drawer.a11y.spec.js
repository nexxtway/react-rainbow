import React from 'react';
import { mount } from 'enzyme';
import { axe } from 'jest-axe';
import Drawer from '..';
import Button from '../../Button';

describe('<Drawer/>', () => {
    it('should be accessible', () => {
        const wrapper = mount(
            <Drawer isOpen title="Drawer a11y" footer={<Button label="button in drawer footer" />}>
                <p>A rainbow is a meteorological phenomenon ...</p>
            </Drawer>,
        );
        setTimeout(async () => {
            expect.assertions(1);
            const html = wrapper.html();
            const results = await axe(html);
            expect(results).toHaveNoViolations();
        }, 500);
    });
});
