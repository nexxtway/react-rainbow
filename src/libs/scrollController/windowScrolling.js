const privateHandleScroll = Symbol('handleScroll');

class WindowScrolling {
    constructor() {
        this.callback = null;
        this.listening = false;
        this.isTicking = false;
        this[privateHandleScroll] = this[privateHandleScroll].bind(this);
    }

    [privateHandleScroll](event) {
        if (!this.isTicking) {
            window.requestAnimationFrame(() => {
                this.callback(this.callback(this, event));
                this.isTicking = false;
            });
            this.isTicking = true;
        }
    }

    startListening(callback) {
        this.callback = callback;
        window.addEventListener('scroll', this[privateHandleScroll]);
        window.addEventListener('wheel', this[privateHandleScroll]);
        this.listening = true;
    }

    stopListening() {
        if (this.listening) {
            this.listening = false;
            window.removeEventListener('scroll', this[privateHandleScroll]);
            window.removeEventListener('wheel', this[privateHandleScroll]);
            this.callback = null;
        }
    }
}

export default WindowScrolling;
