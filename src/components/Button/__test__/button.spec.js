import React from 'react';
import Button from './../index';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Button/>', () => {
    it('should have proper classes when variant is brand', () => {
        const component = renderer.create(
            <Button label="Button label" variant="brand"/>
        );

        expect(component).toMatchSnapshot();
    });

    it('should call onClick function when someone click over', () => {
        const onClickMockFn = jest.fn();
        const component = shallow(
            <Button label="Button label" onClick={ onClickMockFn }/>
        );

        component.simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });

    it('should call onBlur function when it lost the focus', () => {
        const onBlurMockFn = jest.fn();
        const component = shallow(
            <Button label="Button label" onBlur={ onBlurMockFn }/>
        );

        component.simulate('blur');
        expect(onBlurMockFn.mock.calls.length).toBe(1);
    });
    
    it('should call onFocus function when it gets the focus', () => {
        const onFocusMockFn = jest.fn();
        const component = shallow(
            <Button label="Button label" onFocus={ onFocusMockFn }/>
        );

        component.simulate('focus');
        expect(onFocusMockFn.mock.calls.length).toBe(1);
    });

    it('should render a children node', () => {
    	const component = shallow(
    		<Button><p>Child node</p></Button>
    	);

    	expect(component.contains(<p>Child node</p>)).toBe(true);
    });

});
