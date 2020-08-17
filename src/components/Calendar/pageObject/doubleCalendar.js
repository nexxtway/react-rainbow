/**
 * Calendar page object class.
 * @class
 * @tutorial calendar
 */
class PageDoubleCalendar {
    /**
     * Create a new PageCalendar page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageCalendar root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the previous month button element.
     * @method
     */
    clickPrevMonthButton() {
        $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[0]
            .click();
    }

    /**
     * Clicks the next month button element.
     * @method
     */
    clickNextMonthButton() {
        $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[1]
            .click();
    }

    /**
     * Returns true when the previous month button element is disabled.
     * @method
     * @returns {bool}
     */
    isPrevMonthButtonDisabled() {
        const buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[0];
        return !buttonEl.isEnabled();
    }

    /**
     * Returns true when the next month button element is disabled.
     * @method
     * @returns {bool}
     */
    isNextMonthButtonDisabled() {
        const buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[1];
        return !buttonEl.isEnabled();
    }

    /**
     * Returns true when the previous month button element has focus.
     * @method
     * @returns {bool}
     */
    isPrevMonthButtonFocused() {
        const buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[0];
        return buttonEl.isExisting() && buttonEl.isFocused();
    }

    /**
     * Returns true when the next month button element is disabled.
     * @method
     * @returns {bool}
     */
    isNextMonthButtonFocused() {
        const buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[1];
        return buttonEl.isExisting() && buttonEl.isFocused();
    }

    /**
     * Clicks the select year element on the left month.
     * @method
     */
    clickLeftMonthSelectYear() {
        $(this.rootElement)
            .$$('select')[0]
            .click();
    }

    /**
     * Clicks the specific enabled day button element on the left month.
     * @method
     */
    clickLeftMonthDay(day) {
        const buttonEl = $(this.rootElement)
            .$$('table[role=grid]')[0]
            .$(`button=${day}`);
        if (buttonEl.isExisting()) buttonEl.click();
    }

    /**
     * Returns the text of the selected left month element.
     * @method
     * @returns {string}
     */
    getLeftSelectedMonth() {
        return $(this.rootElement)
            .$$('h3[data-id=month]')[0]
            .getText();
    }

    /**
     * Returns the value of the left select year element.
     * @method
     * @returns {string}
     */
    getLeftMonthSelectedYear() {
        return $(this.rootElement)
            .$$('select')[0]
            .getValue();
    }

    /**
     * Returns the text of the current selected day element on the left month.
     * @method
     * @returns {string}
     */
    getLeftMonthSelectedDay() {
        const day = $(this.rootElement)
            .$$('table[role=grid]')[0]
            .$('button[data-selected=true]');
        if (day.isExisting()) return day.getText();
        return undefined;
    }

    /**
     * Set the value of the year select element
     * @method
     * @param {string}
     */
    setLeftMonthYear(value) {
        $(this.rootElement)
            .$$('select')[0]
            .selectByVisibleText(value);
    }

    /**
     * Returns true when the specific day button element on the left month has focus.
     * @method
     * @returns {bool}
     */
    isLeftMonthDayFocused(day) {
        const buttonEl = $(this.rootElement)
            .$$('table[role=grid')[0]
            .$(`button=${day}`);
        return buttonEl.isExisting() && buttonEl.isFocused();
    }

    /**
     * Returns true when the specific day element in left month is selected.
     * @method
     * @returns {string}
     */
    isLeftMonthDaySelected(day) {
        const buttonEl = $(this.rootElement)
            .$$('table[role=grid')[0]
            .$(`button=${day}`);
        return buttonEl.isExisting() && buttonEl.getAttribute('data-selected') === 'true';
    }

    /**
     * Returns true when the year select element in left month has focus.
     * @method
     * @returns {bool}
     */
    isLeftMonthYearSelectFocused() {
        const selectEl = $(this.rootElement).$$('select')[0];
        return selectEl.isExisting() && selectEl.isFocused();
    }

    /**
     * Clicks the select year element on the right month.
     * @method
     */
    clickRightMonthSelectYear() {
        $(this.rootElement)
            .$$('select')[1]
            .click();
    }

    /**
     * Clicks the specific enabled day button element on the right month.
     * @method
     */
    clickRightMonthDay(day) {
        const buttonEl = $(this.rootElement)
            .$$('table[role=grid]')[1]
            .$(`button=${day}`);
        if (buttonEl.isExisting()) buttonEl.click();
    }

    /**
     * Returns the text of the selected left month element.
     * @method
     * @returns {string}
     */
    getRightSelectedMonth() {
        return $(this.rootElement)
            .$$('h3[data-id=month]')[1]
            .getText();
    }

    /**
     * Returns the value of the left select year element.
     * @method
     * @returns {string}
     */
    getRightMonthSelectedYear() {
        return $(this.rootElement)
            .$$('select')[1]
            .getValue();
    }

    /**
     * Returns the text of the current selected day element on the left month.
     * @method
     * @returns {string}
     */
    getRightMonthSelectedDay() {
        const day = $(this.rootElement)
            .$$('table[role=grid]')[1]
            .$('button[data-selected=true]');
        if (day.isExisting()) return day.getText();
        return undefined;
    }

    /**
     * Set the value of the right select year element
     * @method
     * @param {string}
     */
    setRightMonthYear(value) {
        $(this.rootElement)
            .$$('select')[1]
            .selectByVisibleText(value);
    }

    /**
     * Returns true when the specific day button element on the right month has focus.
     * @method
     * @returns {bool}
     */
    isRightMonthDayFocused(day) {
        const buttonEl = $(this.rootElement)
            .$$('table[role=grid')[1]
            .$(`button=${day}`);
        return buttonEl.isExisting() && buttonEl.isFocused();
    }

    /**
     * Returns true when the specific day element in right month is selected.
     * @method
     * @returns {string}
     */
    isRightMonthDaySelected(day) {
        const buttonEl = $(this.rootElement)
            .$$('table[role=grid')[1]
            .$(`button=${day}`);
        return buttonEl.isExisting() && buttonEl.getAttribute('data-selected') === 'true';
    }

    /**
     * Returns true when the year select element in right month has focus.
     * @method
     * @returns {bool}
     */
    isRightMonthYearSelectFocused() {
        const selectEl = $(this.rootElement).$$('select')[1];
        return selectEl.isExisting() && selectEl.isFocused();
    }
}

module.exports = PageDoubleCalendar;
