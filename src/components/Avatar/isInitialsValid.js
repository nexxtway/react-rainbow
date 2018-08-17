export default function isInitialsValid(initials) {
    const INITIALS_REGEX = /^[A-Z][A-Za-z]$/;
    return INITIALS_REGEX.test(initials);
}
