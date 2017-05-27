let lastId = 0;

export default function uniqueId (prefix = 'id') {
    lastId += 1;
    return `${prefix}${lastId}`;
};