export default function getFilterRegExp(query) {
    const newQuery = query
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .join('.*');
    return new RegExp(newQuery, 'i');
}
