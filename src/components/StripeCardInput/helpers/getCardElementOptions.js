export default function getCardElementOptions(theme, disabled) {
    return {
        style: {
            base: {
                iconColor: theme.palette.text.main,
                fontFamily: '"Lato", Arial, sans-serif',
                backgroundColor: disabled
                    ? theme.palette.background.disabled
                    : theme.palette.background.main,
                color: theme.palette.text.main,
                fontSize: '1.1rem',
                '::placeholder': {
                    color: theme.palette.text.header,
                    fontVariant: 300,
                },
                ':disabled': {
                    color: theme.palette.text.disabled,
                    iconColor: theme.palette.text.disabled,
                    backgroundColor: theme.palette.background.disabled,
                },
            },
            invalid: {
                iconColor: theme.palette.error.main,
                color: theme.palette.error.main,
            },
        },
        disabled,
    };
}
