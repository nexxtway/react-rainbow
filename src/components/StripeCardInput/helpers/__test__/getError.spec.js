import getError from '../getError';

describe('getError', () => {
    it('should return specific object when error is passed', () => {
        const error = {
            code: 1,
            type: 'type',
            message: 'message',
            otherField: 'invalid',
        };

        const result = getError(error);
        expect(result).toEqual({
            code: 1,
            type: 'type',
            message: 'message',
        });
    });

    it('should return undefined when no error is passed', () => {
        const result = getError();
        expect(result).toBe(undefined);
    });
});
