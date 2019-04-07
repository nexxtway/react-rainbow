export default function debounce(callback, time) {
    let timer;
    return function debounced() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback();
        }, time);
    };
}
