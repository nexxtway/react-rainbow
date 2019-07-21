/* eslint-disable indent */
import getNormalizedOptions from './getNormalizedOptions';
import getStringHightlighted from './getStringHighlighted';

export default function getOptionsHightlighted(options, searchValue) {
    const optionsList = getNormalizedOptions(options);

    if (searchValue in [null, undefined, '']) {
        return optionsList;
    }

    return optionsList.reduce((list, option) => {
        const { label, ...otherProps } = option;

        const result =
            typeof label === 'string'
                ? {
                      label: getStringHightlighted(label, searchValue),
                      ...otherProps,
                  }
                : option;

        return [...list, result];
    }, []);
}
