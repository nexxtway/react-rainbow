const NUMBER_REGEX = /^[0-9]{0,8}$/;

export default function isNumber(value) {
    return NUMBER_REGEX.test(value) && !Array.isArray(value) && value !== '';
}
