const PageSingleCalendar = require('./singleCalendar');
const PageDoubleCalendar = require('./doubleCalendar');

async function PageCalendar(rootElement) {
    const type = await $(rootElement).getAttribute('data-calendar-type');
    if (type === 'double') return new PageDoubleCalendar(rootElement);
    return new PageSingleCalendar(rootElement);
}

module.exports = PageCalendar;
