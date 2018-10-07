import React from 'react';
import { mount } from 'enzyme';
import AnimationButtom from '../animationButton';

describe('<AnimationButtom />', () => {
    it('should set the right assistive text', () => {
        const component = mount(<AnimationButtom isAnimationPaused />);

        expect(component.find('span').text()).toBe('Start auto-play');
    });

    it('should set the right aria-pressed value', () => {
        const component = mount(<AnimationButtom isAnimationPaused />);

        expect(component.find('button').prop('aria-pressed')).toBe(true);
    });

    it('should show the right icon', () => {
        const component = mount(<AnimationButtom />);

        expect(component.find('PlayIcon').exists()).toBe(true);
    });

    it('should show the right icon', () => {
        const component = mount(<AnimationButtom isAnimationPaused={false} />);

        expect(component.find('PauseIcon').exists()).toBe(true);
    });

    it('should call the function passed in onClick', () => {
        const onClickMockFn = jest.fn();
        const component = mount(<AnimationButtom onClick={onClickMockFn} />);
        component.find('button').simulate('click');

        expect(onClickMockFn).toHaveBeenCalledTimes(1);
    });
});
