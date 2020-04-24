import { getHeightOfMinutes } from '..';

describe('getHeightOfMinutes', () => {
    it('should return 0 when is 0 minute', () => {
        expect(getHeightOfMinutes(0)).toEqual(0);
    });
    it('should return 30 when is 30 minutes', () => {
        expect(getHeightOfMinutes(30)).toEqual(20);
    });
    it('should return 60 when is 60 minutus', () => {
        expect(getHeightOfMinutes(60)).toEqual(40);
    });
});
