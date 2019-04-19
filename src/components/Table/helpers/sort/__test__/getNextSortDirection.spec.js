import { getNextSortDirection } from '../';

describe('getNextSortDirection', () => {
    it('should return "asc" by default if any argument is passed', () => {
        expect(getNextSortDirection()).toBe('asc');
    });
    it('should return "asc" by default if only field is passed', () => {
        expect(getNextSortDirection('name')).toBe('asc');
    });
    it('should return "asc" by default if only sortedBy is passed', () => {
        expect(getNextSortDirection(undefined, 'name')).toBe('asc');
    });
    it('should return the sortDirection passed when field and sortedBy are not passed', () => {
        expect(getNextSortDirection(undefined, undefined, 'desc')).toBe('desc');
    });
    it('should return "asc" when sortDirection is not passed and field and sortBy does not match', () => {
        expect(getNextSortDirection('name', 'email')).toBe('asc');
    });
    it('should return "desc" when sortDirection is not passed and field and sortBy match', () => {
        expect(getNextSortDirection('email', 'email')).toBe('desc');
    });
    it('should return the sortDirection passed when sortedBy is not passed', () => {
        expect(getNextSortDirection('name', undefined, 'desc')).toBe('desc');
    });
    it('should return the sortDirection passed when field is not passed', () => {
        expect(getNextSortDirection(undefined, 'name', 'whatever')).toBe('whatever');
    });
    it('should return the sortDirection passed when field and sortedBy does not match', () => {
        expect(getNextSortDirection('name', 'email', 'some string')).toBe('some string');
    });
    it('should return "desc" when sortDirection passed is "asc" and field and sortedBy match', () => {
        expect(getNextSortDirection('name', 'name', 'asc')).toBe('desc');
    });
    it('should return "asc" when sortDirection passed is "desc" and field and sortedBy match', () => {
        expect(getNextSortDirection('name', 'name', 'desc')).toBe('asc');
    });
});
