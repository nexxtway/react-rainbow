module.exports = {
    Heading: {
        heading2: {
            lineHeight: 1.25,
            fontWeight: 300,
            fontSize: '1.25rem',
            color: '#061c3f',
            fontFamily: 'inherit',
            marginBottom: '1rem',
            marginTop: '1.75rem',
        },
        heading3: {
            lineHeight: 1.25,
            fontWeight: 300,
            fontSize: '1rem',
            color: '#061c3f',
            fontFamily: 'inherit',
            marginTop: '1rem',
        },
        heading5: {
            lineHeight: 1.5,
            fontWeight: 300,
            fontSize: '0.88rem',
            color: '#061c3f',
            fontFamily: 'inherit',
        },
        heading6: {
            height: '34px',
            backgroundColor: '#04132c',
            color: '#04132c',
            borderRadius: '10px 10px 0 0',
            marginTop: -25,
        },
    },
    Link: {
        link: {
            '&, &:link, &:visited': {
                fontSize: 'inherit',
                color: '#009acf',
            },
            '&:hover, &:active': {
                isolate: false,
                color: '#009acf',
                cursor: 'pointer',
                textDecoration: 'underline',
            },
        },
    },
    Para: {
        para: {
            marginBottom: 4,
            marginTop: 4,
            color: '#576574',
        },
    },
    Text: {
        strong: {
            lineHeight: 1.5,
            fontWeight: 300,
            fontSize: '0.85rem',
            color: '#061c3f',
            fontFamily: 'inherit',
        },
    },
    Code: {
        code: {
            lineHeight: 1.5,
            color: '#a2aab7',
            padding: 0,
        },
    },
    Pre: {
        pre: {
            width: '100%',
            backgroundColor: '#061c3f',
            paddingTop: '12px',
            paddingLeft: '12px',
            paddingBottom: '48px',
            borderRadius: '0 0 5px 5px',
            borderColor: '#061c3f',
            overflow: 'auto',
            marginTop: -14,
        },
    },
    PlaygroundError: {
        root: {
            padding: '16px 24px',
            whiteSpace: 'pre-wrap !important',
        },
    },
    MarkdownHeading: {
        spacing: {
            marginBottom: 8,
        },
    },
};
