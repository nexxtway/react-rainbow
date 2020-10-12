/* eslint-disable no-plusplus, id-length */
export default class EventQueue {
    constructor() {
        this.q = [];
    }

    add(ev) {
        this.q.push(ev);
    }

    call(sizeInfo) {
        for (let i = 0, j = this.q.length; i < j; i++) {
            this.q[i].call(this, sizeInfo);
        }
    }

    remove(ev) {
        const newQueue = [];
        for (let i = 0, j = this.q.length; i < j; i++) {
            if (this.q[i] !== ev) {
                newQueue.push(this.q[i]);
            }
        }
        this.q = newQueue;
    }

    length() {
        return this.q.length;
    }
}
