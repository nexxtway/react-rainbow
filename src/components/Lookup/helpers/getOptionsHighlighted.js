/* eslint-disable indent */
import getNormalizedOptions from './getNormalizedOptions';
import getStringHighlighted from './getStringHighlighted';

export default function getOptionsHighlighted(options, searchValue) {
    const optionsList = getNormalizedOptions(options);

    if (typeof searchValue !== 'string' || !searchValue) {
        return optionsList;
    }

    return optionsList.reduce((list, option) => {
        const { label, ...otherProps } = option;

        const result =
            typeof label === 'string'
                ? {
                      label: getStringHighlighted(label, searchValue),
                      labelOrig: label,
                      ...otherProps,
                  }
                : option;

        return [...list, result];
    }, []);
}
