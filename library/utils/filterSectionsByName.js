export default function filterSectionsByName(data, query) {
    const newQuery = query
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .join('.*');
    return data.filter(item => {
        const regex = new RegExp(newQuery, 'i');
        return regex.test(item.visibleName);
    });
}
