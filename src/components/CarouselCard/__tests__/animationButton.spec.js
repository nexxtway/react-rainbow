import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AnimationButtom from '../animationButton';

describe('<AnimationButtom />', () => {
    it('should set the right assistive text', () => {
        const { getByText } = render(<AnimationButtom isAnimationPaused />);

        expect(getByText('Start auto-play')).toBeDefined();
    });

    it('should set the right assistive text', () => {
        const { getByText } = render(<AnimationButtom isAnimationPaused={false} />);

        expect(getByText('Stop auto-play')).toBeDefined();
    });

    it('should set the right aria-pressed value', () => {
        const { getByRole } = render(<AnimationButtom isAnimationPaused />);

        expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('should show the play icon', () => {
        const { getByTitle } = render(<AnimationButtom />);

        expect(getByTitle('play')).toBeDefined();
    });

    it('should show the pause icon when isAnimationPaused is false', () => {
        const { getByTitle } = render(<AnimationButtom isAnimationPaused={false} />);

        expect(getByTitle('pause')).toBeDefined();
    });

    it('should call the function passed in onClick', () => {
        const onClickMockFn = jest.fn();
        const { getByRole } = render(<AnimationButtom onClick={onClickMockFn} />);

        fireEvent.click(getByRole('button'));
        expect(onClickMockFn).toHaveBeenCalledTimes(1);
    });
});
