import React from 'react';
import { mount } from 'enzyme';
import ButtonMenu from './../';

describe('<ButtonMenu/>', () => {
    it('should pass the icon passed to the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu icon={<svg />}>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('icon')).toEqual(<svg />);
    });
    it('should set the title passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu title="my title">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('title')).toBe('my title');
    });
    it('should set the buttonVariant passed as variant in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonVariant="brand">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('variant')).toBe('brand');
    });
    it('should set the buttonSize passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonSize="small">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('size')).toBe('small');
    });
    it('should set the disabled passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu disabled>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('disabled')).toBe(true);
    });
    it('should set the buttonShaded passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonShaded>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('shaded')).toBe(true);
    });
    it('should set the tabIndex passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu tabIndex={0}>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('tabIndex')).toBe(0);
    });
});
