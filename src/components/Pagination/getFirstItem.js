export default function getFirstItem(pages, activePage) {
    if (activePage < 3) {
        return 1;
    }
    if (activePage > pages - 2) {
        return activePage - (4 - (pages - activePage));
    }
    return activePage - 2;
}
