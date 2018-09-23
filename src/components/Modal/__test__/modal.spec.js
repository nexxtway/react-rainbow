import React from 'react';
import { mount } from 'enzyme';
import Modal from './../';

describe('<Modal/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <Modal>
                <p data-id="modal-children">modal content</p>
            </Modal>,
        );
        expect(component.find('p[data-id="modal-children"]').text()).toBe('modal content');
    });
    it('should have the right class names in the backdrop element', () => {
        const component = mount(
            <Modal>
                <p />
            </Modal>,
        );
        expect(component.find('div[className="rainbow-modal_backdrop"]').exists()).toBe(true);
    });
    it('should have the right class names in the backdrop element when the modal is opened', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('div[className="rainbow-modal_backdrop rainbow-modal_backdrop--open"]').exists()).toBe(true);
    });
    it('should have the right class names in the section element', () => {
        const component = mount(
            <Modal>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('className')).toBe('rainbow-modal');
    });
    it('should have the right class names in the section element when the modal is opened', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('className')).toBe('rainbow-modal rainbow-modal--fade-in');
    });
    it('should have the right class names in the section element when the modal is opened and the size is medium', () => {
        const component = mount(
            <Modal isOpen size="medium">
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('className')).toBe('rainbow-modal rainbow-modal--fade-in rainbow-modal--medium');
    });
    it('should have the right class names in the section element when the modal is opened and the size is large', () => {
        const component = mount(
            <Modal isOpen size="large">
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('className')).toBe('rainbow-modal rainbow-modal--fade-in rainbow-modal--large');
    });
});
