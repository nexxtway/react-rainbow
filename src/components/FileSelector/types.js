const isBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const isServer = !(isBrowser || isNative);

// eslint-disable-next-line import/prefer-default-export
export const FileListType = isServer ? Object : window.FileList;
