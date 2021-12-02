export default class WindowResize {
    constructor() {
        this.callback = null;
        this.listening = false;
    }

    startListening(callback) {
        this.callback = callback;
        window.addEventListener('resize', this.callback);
        this.listening = true;
    }

    stopListening() {
        if (this.listening) {
            this.listening = false;
            window.removeEventListener('resize', this.callback);
            this.callback = null;
        }
    }
}
