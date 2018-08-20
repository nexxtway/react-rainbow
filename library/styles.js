module.exports = {
    Heading: {
        heading2: {
            lineHeight: 1.25,
            fontWeight: 300,
            fontSize: '1.25rem',
            color: '#00396b',
            fontFamily: 'inherit',
            marginBottom: '1rem',
            marginTop: '1.75rem',
        },
        heading3: {
            lineHeight: 1.25,
            fontWeight: 300,
            fontSize: '1rem',
            color: '#5876a3',
            fontFamily: 'inherit',
            marginTop: '1rem',
        },
        heading5: {
            lineHeight: 1.5,
            fontWeight: 300,
            fontSize: '0.88rem',
            color: '#5876a3',
            fontFamily: 'inherit',
        },
    },
    Link: {
        link: {
            '&, &:link, &:visited': {
                fontSize: 'inherit',
                color: '#006dcc',
                textDecoration: 'underline',
            },
            '&:hover, &:active': {
                isolate: false,
                color: '#005fb2',
                cursor: 'pointer',
            },
        },
    },
    Para: {
        para: {
            marginBottom: 4,
            marginTop: 4,
        },
    },
    Text: {
        strong: {
            lineHeight: 1.5,
            fontWeight: 300,
            fontSize: '0.85rem',
            color: '#00396b',
            fontFamily: 'inherit',
        },
    },
    Code: {
        code: {
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 1.5,
            letterSpacing: 'normal',
            color: '#2b2826',
            padding: 0,
        },
    },
    Pre: {
        pre: {
            width: '522px',
            backgroundColor: '#ffffff',
            paddingTop: '13px',
            paddingLeft: '25px',
            paddingBottom: '48px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            overflow: 'auto',
            marginTop: -5,
        },
    },
};
