import React from 'react';
import { mount } from 'enzyme';
import RenderIf from './../index';

describe('<RenderIf/>', () => {
    it('should not return the children when is not True', () => {
        const component = mount(
            <RenderIf>
                <svg />
            </RenderIf>,
        );
        expect(component.children().length).toBe(0);
    });
    it('should return the children when isTrue', () => {
        const component = mount(
            <RenderIf isTrue={<svg />}>
                <svg />
            </RenderIf>,
        );
        expect(component.children().length).toBe(1);
    });
});
