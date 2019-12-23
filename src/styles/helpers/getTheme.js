import defaultTheme from '../defaultTheme';

// TODO: make test to this function
export default function getTheme(props) {
    return props.theme.rainbow || defaultTheme;
}

export function getRainbowTheme(props) {
    if (!props.theme.rainbow) {
        return {
            theme: {
                rainbow: defaultTheme,
            },
        };
    }
    return {};
}
