import getTheme from './getTheme';

export default function attachThemeAttrs(styledElement) {
    return styledElement.attrs(props => {
        const theme = getTheme(props);
        return {
            ...props,
            ...theme,
        };
    });
}
