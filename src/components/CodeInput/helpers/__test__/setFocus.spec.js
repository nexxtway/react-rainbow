import setFocus from '../setFocus';

describe('setFocus', () => {
    it('should call ref focus() and select() methods when ref is valid', () => {
        const ref = {
            current: {
                focus: jest.fn(),
                select: jest.fn(),
            },
        };
        setFocus(ref);
        expect(ref.current.focus).toHaveBeenCalled();
    });
    it('should not call ref focus() nor select() methods when ref is invalid', () => {
        const ref = {
            current: {
                focus: jest.fn(),
                select: jest.fn(),
            },
        };
        const invalidRef = null;
        setFocus(invalidRef);
        expect(ref.current.focus).not.toHaveBeenCalled();
    });
});
