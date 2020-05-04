export default function getLoopArray(length) {
    const loopArray = [];

    if (length > 0) {
        for (let i = 0; i < length; i += 1) {
            loopArray.push('');
        }
    }

    return loopArray;
}
