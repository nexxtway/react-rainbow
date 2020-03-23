export default function getError(error) {
    return error
        ? {
              code: error.code,
              type: error.type,
              message: error.message,
          }
        : undefined;
}
