const SIZES = {
    small: '14px',
    medium: '16px',
    large: '20px',
};

export default function getCardElementOptions(theme, disabled, size) {
    const fontSize = SIZES[size] || SIZES.medium;
    return {
        style: {
            base: {
                iconColor: theme.palette.text.main,
                fontFamily: '"Lato", Arial, sans-serif',
                backgroundColor: disabled
                    ? theme.palette.background.disabled
                    : theme.palette.background.main,
                color: theme.palette.text.main,
                fontSize,
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
