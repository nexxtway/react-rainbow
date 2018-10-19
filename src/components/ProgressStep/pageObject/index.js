/**
 * ProgressStep page object class.
 * @class
 */
class PageProgressStep {
    /**
     * Create a new ProgressStep page object.
     * @constructor
     * @param {string} rootElement - The selector of the ProgressStep root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the progress step.
     * @method
     */
    click() {
        $(this.rootElement).$('button').click();
    }

    /**
     * Returns true when the progress step is active.
     * @method
     * @returns {bool}
     */
    isActive() {
        return $(this.rootElement).$('button').getAttribute('class') === 'rainbow-button-icon rainbow-button-icon--medium rainbow-progress-step--is-active';
    }

    /**
     * Returns true when the progress step is completed.
     * @method
     * @returns {bool}
     */
    isCompleted() {
        return $(this.rootElement).$('button').getAttribute('class') === 'rainbow-button-icon rainbow-button-icon--medium rainbow-progress-step--is-completed';
    }

    /**
     * Returns true when the progress step has an error.
     * @method
     * @returns {bool}
     */
    hasError() {
        return $(this.rootElement).$('button').getAttribute('class') === 'rainbow-button-icon rainbow-button-icon--medium rainbow-progress-step--error';
    }
}

module.exports = PageProgressStep;
