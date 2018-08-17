import {
    isIconNameValid,
    getSpriteName,
    getIconName,
} from './../utils';

describe('IconSvg utils', () => {
    describe('isIconNameValid', () => {
        it('should return true if the icon name has a valid format', () => {
            expect(isIconNameValid('utility:add_contact')).toBe(true);
        });
        it('should return false if the icon name has an invalid format', () => {
            expect(isIconNameValid('wrong-name')).toBe(false);
        });
    });
    describe('getSpriteName', () => {
        it('should return the sprite part of the icon name', () => {
            expect(getSpriteName('action:add_contact')).toBe('action');
        });
        it('should return the same string passed when there is not a : character', () => {
            expect(getSpriteName('action-add_contact')).toBe('action-add_contact');
        });
    });
    describe('getIconName', () => {
        it('should return the icon name part of the icon name', () => {
            expect(getIconName('action:add_contact')).toBe('add_contact');
        });
        it('should return the same string passed when there is not a : character', () => {
            expect(getSpriteName('add_contact')).toBe('add_contact');
        });
    });
});
