export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export function hideMessage() {
    return { type: HIDE_MESSAGE };
}

export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export function showErrorMessage(message) {
    return {
        type: SHOW_ERROR_MESSAGE,
        message,
    };
}

export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';
export function showSuccessMessage(message) {
    return {
        type: SHOW_SUCCESS_MESSAGE,
        message,
    };
}
