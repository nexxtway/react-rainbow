import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ButtonIcon from './../index';

describe('<ButtonIcon/>', () => {
    it('should render a button icon', () => {
        const component = renderer.create(<ButtonIcon iconName="utility:settings" />);

        expect(component).toMatchSnapshot();
    });

    it('should render a dropdown button icon', () => {
        const component = renderer.create(
            <ButtonIcon iconName="utility:settings" variant="dropdown" />,
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a hinthover button icon', () => {
        const component = renderer.create(
            <ButtonIcon iconName="utility:settings" variant="hinthover" />,
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a disabled button icon', () => {
        const component = renderer.create(
            <ButtonIcon iconName="utility:settings" disabled />);

        expect(component).toMatchSnapshot();
    });

    it('should render nothing when variant is one of the dropdown and size prop is passed other than medium', () => {
        const component = renderer.create(
            <ButtonIcon iconName="utility:settings" variant="dropdown" size="small" />,
        );

        expect(component).toMatchSnapshot();
    });

    it('should show a console warning when variant is one of the dropdown and size prop is passed other than medium', () => {
        console.warn = jest.fn();
        shallow(<ButtonIcon iconName="custom-custom5" variant="dropdownBorder" size="x-small" />);

        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('should call onClick function when someone click over', () => {
        const onClickMockFn = jest.fn();
        const component = shallow(<ButtonIcon iconName="utility:like" onClick={onClickMockFn} />);

        component.simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });

    it('should call onBlur function when it lost the focus', () => {
        const onBlurMockFn = jest.fn();
        const component = shallow(<ButtonIcon iconName="utility:like" onBlur={onBlurMockFn} />);

        component.simulate('blur');
        expect(onBlurMockFn.mock.calls.length).toBe(1);
    });

    it('should call onFocus function when it gets the focus', () => {
        const onFocusMockFn = jest.fn();
        const component = shallow(<ButtonIcon iconName="utility:like" onFocus={onFocusMockFn} />);

        component.simulate('focus');
        expect(onFocusMockFn.mock.calls.length).toBe(1);
    });
});
