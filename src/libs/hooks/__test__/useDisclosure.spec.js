import { act, renderHook } from '@testing-library/react-hooks';
import useDisclosure from '../useDisclosure';

describe('useDisclosure', () => {
    it('should set isOpen to true when open function is called', () => {
        const hook = renderHook(value => useDisclosure(value), {
            initialProps: false,
        });
        expect(hook.result.current.isOpen).toBe(false);
        act(() => {
            hook.result.current.open();
        });
        expect(hook.result.current.isOpen).toBe(true);
    });
    it('should set isOpen to false when close function is called', () => {
        const hook = renderHook(value => useDisclosure(value), {
            initialProps: true,
        });
        expect(hook.result.current.isOpen).toBe(true);
        act(() => {
            hook.result.current.close();
        });
        expect(hook.result.current.isOpen).toBe(false);
    });
    it('should toggle  value of isOpen when toggle function is called', () => {
        const hook = renderHook(value => useDisclosure(value), {
            initialProps: false,
        });
        act(() => {
            hook.result.current.toggle();
        });
        expect(hook.result.current.isOpen).toBe(true);
        act(() => {
            hook.result.current.toggle();
        });
        expect(hook.result.current.isOpen).toBe(false);
    });
});
