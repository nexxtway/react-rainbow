/* eslint-disable no-param-reassign, no-plusplus */

/**
 * Based on Marc J. Schmidt library: https://github.com/marcj/css-element-queries/blob/master
 */

class EventQueue {
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

/**
 * Get element size
 * @param {HTMLElement} element - element to return the size.
 * @returns {Object} {width, height}
 */
function getElementSize(element) {
    const rect = element.getBoundingClientRect();
    return {
        width: Math.round(rect.width),
        height: Math.round(rect.height),
    };
}

function createResizeSensor() {
    const resizeSensor = document.createElement('div');
    resizeSensor.dir = 'ltr';
    resizeSensor.className = 'resize-sensor';
    const style =
        'position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
    const styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

    resizeSensor.style.cssText = style;
    // eslint-disable-next-line lwc/no-inner-html
    resizeSensor.innerHTML =
        `<div class="resize-sensor-expand" style="${style}">` +
        `<div style="${styleChild}"></div>` +
        '</div>' +
        `<div class="resize-sensor-shrink" style="${style}">` +
        `<div style="${styleChild} width: 200%; height: 200%"></div>` +
        '</div>';

    return resizeSensor;
}

/**
 *
 * @param {HTMLElement} element - element to listen resize.
 * @param {Function}    resizeListener - resize event listener.
 */
function attachResizeEvent(element, resizeListener) {
    if (!element) {
        return;
    }
    if (element.resizedAttached) {
        element.resizedAttached.add(() => resizeListener());
        return;
    }

    element.resizedAttached = new EventQueue();
    element.resizedAttached.add(() => resizeListener());

    const resizeSensor = createResizeSensor();
    element.resizeSensor = resizeSensor;
    element.appendChild(resizeSensor);

    const position = (window.getComputedStyle(element) || element.style).getPropertyValue(
        'position',
    );

    if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
        element.style.position = 'relative';
    }

    const expand = resizeSensor.childNodes[0];
    const expandChild = expand.childNodes[0];
    const shrink = resizeSensor.childNodes[1];

    let dirty;
    let rafId;
    let size = getElementSize(element);
    let lastWidth = size.width;
    let lastHeight = size.height;
    let initialHiddenCheck = true;
    let resetRafId;

    const resetExpandShrink = () => {
        expandChild.style.width = '100000px';
        expandChild.style.height = '100000px';

        expand.scrollLeft = 100000;
        expand.scrollTop = 100000;

        shrink.scrollLeft = 100000;
        shrink.scrollTop = 100000;
    };

    const reset = () => {
        // Check if element is hidden
        if (initialHiddenCheck) {
            if (!expand.scrollTop && !expand.scrollLeft) {
                // reset
                resetExpandShrink();

                // Check in next frame
                if (!resetRafId) {
                    resetRafId = requestAnimationFrame(() => {
                        resetRafId = 0;
                        reset();
                    });
                }

                return;
            }

            initialHiddenCheck = false;
        }

        resetExpandShrink();
    };
    resizeSensor.resetSensor = reset;

    const onResized = () => {
        rafId = 0;

        if (!dirty) {
            return;
        }

        lastWidth = size.width;
        lastHeight = size.height;

        if (element.resizedAttached) {
            element.resizedAttached.call(size);
        }
    };

    const onScroll = () => {
        size = getElementSize(element);
        dirty = size.width !== lastWidth || size.height !== lastHeight;

        if (dirty && !rafId) {
            rafId = requestAnimationFrame(onResized);
        }

        reset();
    };

    const addEvent = (el, name, cb) => {
        el.addEventListener(name, cb);
    };

    addEvent(expand, 'scroll', onScroll);
    addEvent(shrink, 'scroll', onScroll);

    // Fix for custom Elements
    requestAnimationFrame(reset);
}

function detach(elem, ev) {
    if (!elem) {
        return;
    }
    if (elem.resizedAttached && typeof ev === 'function') {
        elem.resizedAttached.remove(ev);
        if (elem.resizedAttached.length()) {
            return;
        }
    }
    if (elem.resizeSensor) {
        if (elem.contains(elem.resizeSensor)) {
            elem.removeChild(elem.resizeSensor);
        }
        delete elem.resizeSensor;
        delete elem.resizedAttached;
    }
}

export default class ResizeSensor {
    constructor(element, resizeListener) {
        this.targetElement = element;
        this.resizeListener = resizeListener;

        attachResizeEvent(this.targetElement, this.resizeListener);
    }

    detach() {
        detach(this.targetElement, this.resizeListener);
    }

    reset() {
        this.targetElement.resizeSensor.resetSensor();
    }
}
