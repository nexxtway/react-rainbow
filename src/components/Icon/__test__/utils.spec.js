import {
    isUtilitySprite,
    isActionSprite,
    isCustomSprite,
    isStandardSprite,
    normalizeIconName,
    hasBackgroundColor,
} from './../utils';

describe('Icon utils', () => {
    describe('isUtilitySprite', () => {
        it('should return true if the icon sprite is utility', () => {
            expect(isUtilitySprite('utility:add_contact')).toBe(true);
        });
        it('should return false if the icon sprite is other than utility', () => {
            expect(isUtilitySprite('custom:custom23')).toBe(false);
        });
    });
    describe('isActionSprite', () => {
        it('should return true if the icon sprite is action', () => {
            expect(isActionSprite('action:add_contact')).toBe(true);
        });
        it('should return false if the icon sprite is other than action', () => {
            expect(isActionSprite('custom:custom23')).toBe(false);
        });
    });
    describe('isCustomSprite', () => {
        it('should return true if the icon sprite is custom', () => {
            expect(isCustomSprite('custom:custom1')).toBe(true);
        });
        it('should return false if the icon sprite is other than custom', () => {
            expect(isCustomSprite('utility:announcement')).toBe(false);
        });
    });
    describe('isStandardSprite', () => {
        it('should return true if the icon sprite is standard', () => {
            expect(isStandardSprite('standard:bot')).toBe(true);
        });
        it('should return false if the icon sprite is other than standard', () => {
            expect(isStandardSprite('action:log_a_call')).toBe(false);
        });
    });
    describe('normalizeIconName', () => {
        it('should normalize the iconName', () => {
            expect(normalizeIconName('action:add_photo_video')).toBe('action-add-photo-video');
        });
    });
    describe('hasBackgroundColor', () => {
        it('should return true if the icon sprite is action', () => {
            expect(hasBackgroundColor('action:add_contact')).toBe(true);
        });
        it('should return true if the icon sprite is custom', () => {
            expect(hasBackgroundColor('custom:custom26')).toBe(true);
        });
        it('should return true if the icon sprite is standard', () => {
            expect(hasBackgroundColor('standard:account')).toBe(true);
        });
        it('should return false if the icon sprite is utility', () => {
            expect(hasBackgroundColor('utility:adduser')).toBe(false);
        });
        it('should return false if the icon sprite is doctype', () => {
            expect(hasBackgroundColor('doctype:html')).toBe(false);
        });
    });
});
