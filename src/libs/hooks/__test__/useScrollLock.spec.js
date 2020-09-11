import { renderHook } from '@testing-library/react-hooks';
import useScrollLock from '../useScrollLock';

jest.spyOn(document.documentElement, 'clientWidth', 'get')
    .mockImplementation(() => 185)
    .mockImplementationOnce(() => 200);
window.innerWidth = 200;

describe('useScrollLock', () => {
    beforeEach(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';
        jest.useFakeTimers();
    });

    it('should disable scroll when call without param', () => {
        renderHook(() => {
            useScrollLock();
        });
        jest.runAllTimers();
        expect(document.body.style.overflow).toBe('hidden');
    });

    it('should enable scroll when all hooks call disabled false', () => {
        const hooks = Array.from(Array(3)).map(() =>
            renderHook(
                ({ isDisabled }) => {
                    useScrollLock(isDisabled);
                },
                { initialProps: { isDisabled: true } },
            ),
        );
        jest.runAllTimers();
        expect(document.body.style.overflow).toBe('hidden');
        expect(document.body.style.paddingRight).toBe('15px');
        hooks.forEach(({ rerender }, index) => {
            rerender({ isDisabled: false });
            jest.runAllTimers();
            if (index < 2) {
                expect(document.body.style.overflow).toBe('hidden');
                expect(document.body.style.paddingRight).toBe('15px');
            } else {
                expect(document.body.style.overflow).toBe('');
                expect(document.body.style.paddingRight).toBe('0px');
            }
        });
        hooks[0].rerender({ isDisabled: true });
        hooks[0].rerender({ isDisabled: false });
        jest.runAllTimers();
        expect(document.body.style.overflow).toBe('');
        expect(document.body.style.paddingRight).toBe('0px');
    });
});
