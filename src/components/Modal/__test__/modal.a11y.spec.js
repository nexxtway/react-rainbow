import React from 'react';
import { mount } from 'enzyme';
import { axe } from 'jest-axe';
import Modal from '..';
import Button from '../../Button';

describe('<Modal/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const wrapper = mount(
            <Modal isOpen title="Modal a11y" footer={<Button label="button in modal footer" />}>
                <p>A rainbow is a meteorological phenomenon ...</p>
            </Modal>,
        );
        const html = wrapper.html();
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
