/* eslint-disable import/prefer-default-export */

export function eachShouldBeOneOrFunction(results) {
    return results.every(result => result === 1 || result === 'function');
}
