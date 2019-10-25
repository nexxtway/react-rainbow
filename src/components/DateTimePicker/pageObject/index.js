const PageModal = require('../../Modal/pageObject');
const PageCalendar = require('../../Calendar/pageObject');
const PageTimeSelect = require('./pageTimeSelect');

/**
 * DateTimePicker page object class.
 * @class
 * @tutorial datetimepicker
 */
class PageDateTimePicker {
    /**
     * Create a new PageDateTimePicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageDateTimePicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.modalRootEl = `${rootElement}_modal`;
    }

    /**
     * Returns the time selected element.
     * @method
     * @returns {string}
     */
    getTimeValue() {
        return new PageTimeSelect(this.modalRootEl).getValue();
    }

    /**
     * Returns the text of the modal header element.
     * @method
     * @returns {string}
     */
    getModalHeaderText() {
        return $(this.modalRootEl)
            .$('header > h2')
            .getText();
    }

    /**
     * Clicks the input element.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Clicks the calendar specific day button element.
     * @method
     */
    clickDay(day) {
        new PageCalendar(this.modalRootEl).clickDay(day);
    }

    /**
     * Clicks the OK button element
     * @method
     */
    clickOKButton() {
        new PageTimeSelect(this.modalRootEl).clickOKButton();
    }

    /**
     * Clicks the Cancel button element
     * @method
     */
    clickCancelButton() {
        new PageTimeSelect(this.modalRootEl).clickCancelButton();
    }

    /**
     * Wait until the modal is open.
     * @method
     */
    waitUntilModalIsOpen() {
        new PageModal(this.modalRootEl).waitUntilOpen();
    }
}

module.exports = PageDateTimePicker;
