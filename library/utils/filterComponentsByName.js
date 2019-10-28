import getFilterRegExp from './getFilterRegExp';

export default function filterComponentsByName(components, query) {
    const regExp = getFilterRegExp(query);
    return components.filter(_ref => {
        const name = _ref.name;
        return regExp.test(name);
    });
}
