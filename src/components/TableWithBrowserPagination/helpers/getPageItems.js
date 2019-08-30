export default function getPageItems({ data, activePage, pageSize }) {
    if (pageSize > data.length) {
        return data;
    }
    const start = (activePage - 1) * pageSize;
    const end = Math.min(activePage * pageSize, data.length);
    return data.slice(start, end);
}
