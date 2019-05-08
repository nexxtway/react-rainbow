import React from 'react';
import { mount } from 'enzyme';
import RenderIf from './../index';

describe('<RenderIf/>', () => {
    it('should not render the children when isTrue is false', () => {
        const component = mount(
            <RenderIf>
                <svg />
            </RenderIf>,
        );
        expect(component.find('svg').exists()).toBe(false);
    });
    it('should render the children when isTrue is true', () => {
        const component = mount(
            <RenderIf isTrue>
                <svg />
            </RenderIf>,
        );
        expect(component.find('svg').exists()).toBe(true);
    });
});
