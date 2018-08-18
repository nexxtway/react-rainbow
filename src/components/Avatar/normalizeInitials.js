export default function normalizeInitials(initials) {
    if (initials.length === 1) {
        return initials;
    }
    return initials.slice(0, 2);
}
