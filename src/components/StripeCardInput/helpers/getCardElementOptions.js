export default function getCardElementOptions(theme) {
    return {
        style: {
            base: {
                iconColor: theme.palette.text.main,
                fontFamily: '"Lato", Arial, sans-serif',
                backgroundColor: theme.palette.background.main,
                color: theme.palette.text.main,
                fontSize: '16px',
                '::placeholder': {
                    color: theme.palette.text.header,
                    fontWeight: 300,
                },
            },
            invalid: {
                iconColor: theme.palette.error.main,
                color: theme.palette.error.main,
            },
        },
    };
}
