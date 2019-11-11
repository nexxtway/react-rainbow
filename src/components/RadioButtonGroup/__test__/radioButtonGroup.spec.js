import React from 'react';
import { mount, shallow } from 'enzyme';
import RadioButtonGroup from '../index';

const options = [
    { value: 'admin', label: 'Admin', disabled: true },
    { value: 'user', label: 'User' },
    { value: 'anonymous', label: 'Anonymous' },
];

describe('<RadioButtonGroup />', () => {
    it('should set isVisible to true in Marker when there is an option selected initially', () => {
        const component = mount(<RadioButtonGroup options={options} value="user" />);
        expect(component.find('Marker').prop('isVisible')).toBe(true);
    });
    it('should set isVisible to false in Marker when there is a disabled option selected initially', () => {
        const component = mount(<RadioButtonGroup options={options} value="admin" />);
        expect(component.find('Marker').prop('isVisible')).toBe(false);
    });
    it('should set isVisible to false in Marker when there is an invalid option selected initially', () => {
        const component = mount(<RadioButtonGroup options={options} value="apple juice" />);
        expect(component.find('Marker').prop('isVisible')).toBe(false);
    });
    it('should pass the right styles to Marker when there is an option selected', () => {
        const getCheckedOptionRefMock = jest.fn(() => ({
            current: {
                offsetLeft: 10,
                offsetWidth: 100,
                clientWidth: 80,
            },
        }));
        const component = shallow(<RadioButtonGroup options={options} value="user" />).dive();
        const instance = component.instance();
        instance.getCheckedOptionRef = getCheckedOptionRefMock;
        const currentMarkerStyle = {
            left: 10,
            width: 100,
        };
        instance.updateMarker();
        expect(component.find('Marker').prop('style')).toEqual(currentMarkerStyle);
    });
    it('should set isVisible to true in Marker when selecting an option', () => {
        let component;
        const onChangeFn = jest.fn(() => {
            component.setProps({ value: 'anonymous' });
            component.update();
        });
        component = mount(<RadioButtonGroup options={options} onChange={onChangeFn} />);
        expect(component.find('Marker').prop('isVisible')).toBe(false);
        const radio = component
            .find('RadioButtonItem')
            .at(2)
            .find('input');

        radio.simulate('change');
        expect(onChangeFn).toHaveBeenCalled();
        expect(component.find('Marker').prop('isVisible')).toBe(true);
    });
});
