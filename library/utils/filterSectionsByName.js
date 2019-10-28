import getFilterRegExp from './getFilterRegExp';
import filterComponentsByName from './filterComponentsByName';

const _extends =
    Object.assign ||
    function(target) {
        for (let i = 1; i < arguments.length; i++) {
            const source = arguments[i];
            for (const key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

/**
 * Fuzzy filters sections by section or component name.
 *
 * @param {Array} sections
 * @param {string} query
 * @return {Array}
 */
export default function filterSectionsByName(sections, query) {
    const regExp = getFilterRegExp(query);

    return sections
        .map(section =>
            _extends({}, section, {
                sections: section.sections ? filterSectionsByName(section.sections, query) : [],
                components: section.components
                    ? filterComponentsByName(section.components, query)
                    : [],
            }),
        )
        .filter(
            section =>
                section.components.length > 0 ||
                section.sections.length > 0 ||
                regExp.test(section.name),
        );
}
