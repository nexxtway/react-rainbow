export default function getError(error) {
    if (error) {
        return {
            code: error.code,
            type: error.type,
            message: error.message,
        };
    }
    return undefined;
}
