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

});
