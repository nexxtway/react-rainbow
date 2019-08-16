export default function isEmpty(value) {
    return [null, undefined, ''].includes(value) || Array.isArray(value);
}
