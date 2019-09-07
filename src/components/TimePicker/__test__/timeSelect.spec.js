import React from 'react';
import { mount } from 'enzyme';
import TimeSelect from '../timeSelect';

describe('<TimeSelect/>', () => {
    it('should set hour value to "01" when hour input is focused and press up key', () => {
        const component = mount(<TimeSelect />);
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 38 });
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('01');
    });
    it('should set hour value to "12" when hour input is focused and press down key', () => {
        const component = mount(<TimeSelect />);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 40 });
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('12');
    });
    it('should set hour value to "05" when hour input is focused and press up key for 5 times', () => {
        const component = mount(<TimeSelect />);
        const hourInput = component.find('input').at(0);
        const container = component.find('div[role="presentation"]');
        hourInput.simulate('focus');
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('05');
    });
    it('should set the right hour value and focus minutes input', () => {
        const component = mount(<TimeSelect />);
        const values = [
            '000',
            '001',
            '002',
            '005',
            '009',
            '010',
            '011',
            '012',
            '013',
            '014',
            '015',
            '016',
            '017',
            '018',
            '019',
            '2',
            '3',
            '6',
            '9',
        ];
        const expects = [
            '12',
            '01',
            '02',
            '05',
            '09',
            '10',
            '11',
            '12',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '02',
            '03',
            '06',
            '09',
        ];

        values.forEach((value, index) => {
            const hourInput = component.find('input').at(0);
            hourInput.simulate('focus');
            hourInput.simulate('change', { target: { value } });
            const focusedElementDataId = document.activeElement.getAttribute('data-id');
            expect(
                component
                    .find('input')
                    .at(0)
                    .prop('value'),
            ).toBe(expects[index]);
            expect(focusedElementDataId).toBe('minutes');
        });
    });
    it('should set hour value to "01" when hour input is focused and click up button', () => {
        const component = mount(<TimeSelect />);
        const upButton = component.find('ButtonIcon').at(0);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        upButton.simulate('click');
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('01');
    });
    it('should set hour value to "02" when hour input is focused, click up button and then type "2"', () => {
        const component = mount(<TimeSelect />);
        const upButton = component.find('ButtonIcon').at(0);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        upButton.simulate('click');
        hourInput.simulate('change', { target: { value: '2' } });
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('02');
    });
    it('should set hour value to "12" when hour input is focused and click down button', () => {
        const component = mount(<TimeSelect />);
        const downButton = component.find('ButtonIcon').at(1);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        downButton.simulate('click');
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('12');
    });
    it('should set hour value to "02" when hour input is focused, click down button and then type "2"', () => {
        const component = mount(<TimeSelect />);
        const downButton = component.find('ButtonIcon').at(1);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        downButton.simulate('click');
        hourInput.simulate('change', { target: { value: '2' } });
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('02');
    });
    it('should set hour value to "12" when hour input is focused, type 0 and then blur the hour input', () => {
        const component = mount(<TimeSelect />);
        const hourInput = component.find('input').at(0);
        hourInput.simulate('focus');
        hourInput.simulate('change', { target: { value: '0' } });
        hourInput.simulate('blur');
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('12');
    });
    it('should set minutes value to "00" when minutes input is focused and press up key', () => {
        const component = mount(<TimeSelect />);
        const minutesInput = component.find('input').at(1);
        minutesInput.simulate('focus');
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 38 });
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('00');
    });
    it('should set minutes value to "59" when minutes input is focused and press down key', () => {
        const component = mount(<TimeSelect />);
        const minutesInput = component.find('input').at(1);
        minutesInput.simulate('focus');
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 40 });
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('59');
    });
    it('should set minutes value to "02" when minutes input is focused and press up key for 3 times', () => {
        const component = mount(<TimeSelect />);
        const minutesInput = component.find('input').at(1);
        const container = component.find('div[role="presentation"]');
        minutesInput.simulate('focus');
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 38 });
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('02');
    });
    it('should set the right minutes value and focus ampm input', () => {
        const component = mount(<TimeSelect />);
        const values = [
            '022',
            '000',
            '001',
            '022',
            '055',
            '019',
            '030',
            '045',
            '012',
            '013',
            '058',
            '059',
            '6',
            '7',
            '8',
            '9',
        ];
        const expects = [
            '22',
            '00',
            '01',
            '22',
            '55',
            '19',
            '30',
            '45',
            '12',
            '13',
            '58',
            '59',
            '06',
            '07',
            '08',
            '09',
        ];

        values.forEach((value, index) => {
            const minutesInput = component.find('input').at(1);
            minutesInput.simulate('focus');
            minutesInput.simulate('change', { target: { value } });
            const focusedElementDataId = document.activeElement.getAttribute('data-id');
            expect(
                component
                    .find('input')
                    .at(1)
                    .prop('value'),
            ).toBe(expects[index]);
            expect(focusedElementDataId).toBe('input-element');
        });
    });
    it('should set minutes value to "00" when minutes input is focused and click up button', () => {
        const component = mount(<TimeSelect />);
        const upButton = component.find('ButtonIcon').at(0);
        const minutesInput = component.find('input').at(1);
        minutesInput.simulate('focus');
        upButton.simulate('click');
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('00');
    });
    it('should set minutes value to "02" when minutes input is focused and click up button and then type "2"', () => {
        const component = mount(<TimeSelect />);
        const upButton = component.find('ButtonIcon').at(0);
        const minutesInput = component.find('input').at(1);
        minutesInput.simulate('focus');
        upButton.simulate('click');
        minutesInput.simulate('change', { target: { value: '2' } });
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('02');
    });
    it('should set minutes value to "59" when minutes input is focused and click down button', () => {
        const component = mount(<TimeSelect />);
        const downButton = component.find('ButtonIcon').at(1);
        const minutesInput = component.find('input').at(1);
        minutesInput.simulate('focus');
        downButton.simulate('click');
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('59');
    });
    it('should set minutes value to "02" when minutes input is focused and click down button and then type "2"', () => {
        const component = mount(<TimeSelect />);
        const downButton = component.find('ButtonIcon').at(1);
        const minutesInput = component.find('input').at(1);
        minutesInput.simulate('focus');
        downButton.simulate('click');
        minutesInput.simulate('change', { target: { value: '2' } });
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('02');
    });
    it('should focus minutes input when hour input is focused and press right key', () => {
        const component = mount(<TimeSelect />);
        const container = component.find('div[role="presentation"]');
        container.simulate('keyDown', { keyCode: 39 });
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        expect(focusedElementDataId).toBe('minutes');
    });
    it('should focus minutes input when ampm input is focused and press left key', () => {
        const component = mount(<TimeSelect />);
        const container = component.find('div[role="presentation"]');
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 37 });
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        expect(focusedElementDataId).toBe('minutes');
    });
    it('should keep the hour input focused when it is focused and press left key', () => {
        const component = mount(<TimeSelect />);
        const container = component.find('div[role="presentation"]');
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 37 });
        container.simulate('keyDown', { keyCode: 37 });
        container.simulate('keyDown', { keyCode: 37 });
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        expect(focusedElementDataId).toBe('hour');
    });
    it('should keep the ampm input focused when it is focused and press right key', () => {
        const component = mount(<TimeSelect />);
        const container = component.find('div[role="presentation"]');
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 39 });
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        expect(focusedElementDataId).toBe('input-element');
    });
    it('should focus PM input when AM input is focused and press up key', () => {
        const component = mount(<TimeSelect />);
        const container = component.find('div[role="presentation"]');
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 38 });
        const focusedElementDataId = document.activeElement.getAttribute('value');
        expect(focusedElementDataId).toBe('PM');
    });
    it('should focus AM input when PM input is focused and press down key', () => {
        const component = mount(<TimeSelect />);
        const container = component.find('div[role="presentation"]');
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 38 });
        container.simulate('keyDown', { keyCode: 40 });
        const focusedElementDataId = document.activeElement.getAttribute('value');
        expect(focusedElementDataId).toBe('AM');
    });
    it('should reset hour input when it is focused, show the 7 hour and press delete key', () => {
        const component = mount(<TimeSelect />);
        const hourInput = component.find('input').at(0);
        const container = component.find('div[role="presentation"]');
        hourInput.simulate('change', { target: { value: '7' } });
        container.simulate('keyDown', { keyCode: 8 });
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('');
    });
    it('should reset minutes input when it is focused, show the 20 minutes and press delete key', () => {
        const component = mount(<TimeSelect />);
        const minutesInput = component.find('input').at(1);
        const container = component.find('div[role="presentation"]');
        minutesInput.simulate('change', { target: { value: '20' } });
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 8 });
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('');
    });
    it('should set hour value to "01" when press up key after reset hour input', () => {
        const component = mount(<TimeSelect />);
        const hourInput = component.find('input').at(0);
        const container = component.find('div[role="presentation"]');
        hourInput.simulate('change', { target: { value: '7' } });
        container.simulate('keyDown', { keyCode: 8 });
        container.simulate('keyDown', { keyCode: 38 });
        expect(
            component
                .find('input')
                .at(0)
                .prop('value'),
        ).toBe('01');
    });
    it('should set minutes value to "59" when press down key after reset minutes input', () => {
        const component = mount(<TimeSelect />);
        const minutesInput = component.find('input').at(1);
        const container = component.find('div[role="presentation"]');
        minutesInput.simulate('change', { target: { value: '20' } });
        container.simulate('keyDown', { keyCode: 39 });
        container.simulate('keyDown', { keyCode: 8 });
        container.simulate('keyDown', { keyCode: 40 });
        expect(
            component
                .find('input')
                .at(1)
                .prop('value'),
        ).toBe('59');
    });
});
