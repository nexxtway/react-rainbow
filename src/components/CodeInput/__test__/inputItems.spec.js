import React from 'react';
import { mount } from 'enzyme';
import InputItems from '../inputItems';
import InputItem from '../inputItem';

describe('<InputItems />', () => {
    it('should have 4 InputItem elements rendered when value array has a length of 4', () => {
        const component = mount(<InputItems value={['', '', '', '']} />);
        expect(component.find(InputItem).length).toBe(4);
    });
    it('should have isActive only on the focusedIndex input', () => {
        const component = mount(<InputItems value={['1', '', '', '']} focusedIndex={1} />);
        expect(
            component
                .find(InputItem)
                .at(1)
                .prop('isActive'),
        ).toBe(true);
    });
    it('should have tabIndex passed only to the focusedIndex input', () => {
        const tabIndex = 3;
        const component = mount(
            <InputItems value={['1', '', '', '']} focusedIndex={1} tabIndex={tabIndex} />,
        );
        expect(
            component
                .find(InputItem)
                .at(1)
                .prop('tabIndex'),
        ).toBe(3);
    });
    it('should have the initial values properly assigned to each input', () => {
        const values = ['1', '2', '3', '4'];
        const component = mount(<InputItems value={values} />);
        values.forEach((value, index) => {
            expect(
                component
                    .find(InputItem)
                    .at(index)
                    .prop('value'),
            ).toBe(value);
        });
    });
    it('should have unique ids on each input identified by base id and input index', () => {
        const values = ['', '', '', ''];
        const id = 'code-input-base';
        const component = mount(<InputItems value={values} id={id} />);
        values.forEach((value, index) => {
            const singleId = `${id}-${index}`;
            expect(
                component
                    .find(InputItem)
                    .at(index)
                    .prop('id'),
            ).toBe(singleId);
        });
    });
    it('should have ref passed only to the focusedIndex input', () => {
        const ref = React.createRef();
        const component = mount(
            <InputItems value={['1', '', '', '']} focusedIndex={1} ref={ref} />,
        );
        const input0 = component
            .find(InputItem)
            .at(0)
            .getDOMNode();
        const input1 = component
            .find(InputItem)
            .at(1)
            .getDOMNode();
        expect(input0).not.toBe(ref.current);
        expect(input1).toBe(ref.current);
    });
});
