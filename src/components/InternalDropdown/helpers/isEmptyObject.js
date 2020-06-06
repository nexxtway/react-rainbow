export default function isEmptyObject(obj) {
    return obj !== undefined && Object.keys(obj).length === 0;
}
