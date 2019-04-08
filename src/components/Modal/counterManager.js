class CounterManager {
    constructor() {
        this.counter = 0;
    }

    increment() {
        this.counter += 1;
    }

    decrement() {
        if (this.counter > 0) {
            this.counter -= 1;
        }
    }

    hasModalsOpen() {
        return this.counter > 0;
    }
}

export default new CounterManager();
