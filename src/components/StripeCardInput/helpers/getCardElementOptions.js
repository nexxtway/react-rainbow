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
                fontSize: '16px',
                '::placeholder': {
                    color: theme.palette.text.header,
                    fontWeight: 300,
                },
                ':disabled': {
                    color: theme.palette.text.disabled,
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
