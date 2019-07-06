export default function debounce(callback, time = 500) {
    let timer;
    return function debounced(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.call(this, ...args);
        }, time);
    };
}
