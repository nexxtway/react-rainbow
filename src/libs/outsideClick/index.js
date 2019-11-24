class OutsideClick {
    constructor() {
        this.containerRef = null;
        this.callback = null;
    }

    handleClick(event) {
        if (!this.containerRef || !this.callback) return;
        if (!this.containerRef.contains(event.target)) this.callback(this);
    }

    startListening(containerRef, callback) {
        if (!containerRef || !callback) return;
        this.containerRef = containerRef;
        this.callback = callback;
        document.addEventListener('click', this.handleClick);
    }

    stopListening() {
        document.removeEventListener('click', this.handleClick);
        this.containerRef = null;
        this.callback = null;
    }
}

const outsideClick = new OutsideClick();
export default outsideClick;
