import React from 'react';
import { mount } from 'enzyme';
import Modal from './../';

describe('<Modal/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <Modal isOpen>
                <p data-id="modal-children">modal content</p>
            </Modal>,
        );
        expect(component.find('p[data-id="modal-children"]').text()).toBe('modal content');
    });
    it('should render the footer passed', () => {
        const component = mount(
            <Modal isOpen footer="modal footer">
                <p />
            </Modal>,
        );
        expect(component.find('footer').text()).toBe('modal footer');
    });
    it('should have the right class names in the backdrop element when the modal is opened', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('div[className="rainbow-modal_backdrop rainbow-modal_backdrop--open"]').exists()).toBe(true);
    });
    it('should have the right class names in the section element when the modal is opened', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('className')).toBe('rainbow-modal rainbow-modal--open');
    });
    it('should have the right class names in the section element when the modal is opened and the size is medium', () => {
        const component = mount(
            <Modal isOpen size="medium">
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('className')).toBe('rainbow-modal rainbow-modal--open rainbow-modal--medium');
    });
    it('should have the right class names in the section element when the modal is opened and the size is large', () => {
        const component = mount(
            <Modal isOpen size="large">
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('className')).toBe('rainbow-modal rainbow-modal--open rainbow-modal--large');
    });
    it('should set tabIndex as -1 in section element', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('tabIndex')).toBe(-1);
    });
    it('should set the same generated id to section as aria-labelledby and to Header as id', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-labelledby')).toMatch(/modal-heading/);
        expect(component.find('Header').prop('id')).toMatch(/modal-heading/);
    });
    it('should set the same generated id to section as aria-describedby and to children container as id', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-describedby')).toMatch(/modal-content/);
        expect(component.find('div[className="rainbow-modal_content"]').prop('id')).toMatch(/modal-content/);
    });
    it('should set aria-modal to true in section element', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-modal')).toBe(true);
    });
    it('should set aria-hidden to false in section element when modal is open', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-hidden')).toBe(false);
    });
    it('should fire an event when the close button is clicked and the modal is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Modal isOpen onRequestClose={closeMockFn}>
                <p />
            </Modal>,
        );
        component.find('ButtonIcon').simulate('click');
        expect(closeMockFn).toHaveBeenCalledTimes(1);
    });
    it('should fire an event when the modal backdrop is clicked and the modal is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Modal isOpen onRequestClose={closeMockFn}>
                <p />
            </Modal>,
        );
        component.find('div[role="presentation"]').simulate('click');
        expect(closeMockFn).toHaveBeenCalledTimes(1);
    });
    it('should fire an event when the ESC key is pressed and the modal is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Modal isOpen onRequestClose={closeMockFn}>
                <p />
            </Modal>,
        );
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 27 });
        expect(closeMockFn).toHaveBeenCalledTimes(1);
    });
    it('should set body overflow style to hidden when modal is open', () => {
        mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        expect(document.body.style.overflow).toBe('hidden');
    });
    it('should set body overflow style to inherit when component unmounts', () => {
        const component = mount(
            <Modal isOpen>
                <p />
            </Modal>,
        );
        component.unmount();
        expect(document.body.style.overflow).toBe('inherit');
    });
});
