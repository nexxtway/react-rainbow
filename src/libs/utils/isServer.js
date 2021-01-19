const isBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const isServer = !(isBrowser || isNative);

export default isServer;
