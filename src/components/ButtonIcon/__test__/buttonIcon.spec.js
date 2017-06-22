import React from 'react';
import ButtonIcon from './../index';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('<ButtonIcon/>', () => {
    
    it('should render', () => {
        const component = renderer.create(
            <ButtonIcon iconName="utility:settings" />
        );    

        expect(component).toMatchSnapshot();
    });

});