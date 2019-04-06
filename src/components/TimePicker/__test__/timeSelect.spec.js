import React from 'react';
import { mount } from 'enzyme';
import TimeSelect from '../timeSelect';

describe('TimeSelect', () => {
    it('should set hour state to "01" when press up key', () => {
        const component = mount(
            <TimeSelect />,
        );
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 38 });
        expect(component.instance().state.hour).toBe('01');
    });
    it('should set hour state to "12" when press down key', () => {
        const component = mount(
            <TimeSelect />,
        );
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 40 });
        expect(component.instance().state.hour).toBe('12');
    });
    it('should set hour state to "05" when press up key', () => {
        const component = mount(
            <TimeSelect />,
        );
        const hourInput = component.find('input').at(0);
        const container = component.find('div[role="presentation"]');
        hourInput.simulate('focus');
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        expect(component.instance().state.hour).toBe('05');
    });
    it('should set hour state to right value and focus minutes input', () => {
        const component = mount(
            <TimeSelect />,
        );
        const values = ['000', '001', '002', '005', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '2', '3', '6', '9'];
        const expects = ['12', '01', '02', '05', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '02', '03', '06', '09'];

        values.forEach((value, index) => {
            const hourInput = component.find('input').at(0);
            hourInput.simulate('focus');
            hourInput.simulate('change', { target: { value } });
            const focusedElementDataId = document.activeElement.getAttribute('data-id');
            expect(component.instance().state.hour).toBe(expects[index]);
            expect(focusedElementDataId).toBe('minutes');
        });
    });
    it('should set hour state to "01" when press up button', () => {
        const component = mount(
            <TimeSelect />,
        );
        const upButton = component.find('ButtonIcon').at(0);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        upButton.simulate('click');
        expect(component.instance().state.hour).toBe('01');
    });
    it('should set hour state to "02" when press up button and then type "2"', () => {
        const component = mount(
            <TimeSelect />,
        );
        const upButton = component.find('ButtonIcon').at(0);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        upButton.simulate('click');
        hourInput.simulate('change', { target: { value: '2' } });
        expect(component.instance().state.hour).toBe('02');
    });
    it('should set hour state to "12" when type 0 and then blur the hour input', () => {
        const component = mount(
            <TimeSelect />,
        );
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        hourInput.simulate('change', { target: { value: '0' } });
        hourInput.simulate('blur');
        expect(component.instance().state.hour).toBe('12');
    });
});
