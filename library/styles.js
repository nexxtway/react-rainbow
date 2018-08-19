module.exports = {
    Heading: {
        heading2: {
            lineHeight: 1.25,
            fontWeight: 300,
            fontSize: '1.25rem',
            color: '#00396b',
            fontFamily: 'inherit',
        },
        heading5: {
            lineHeight: 1.5,
            fontWeight: 300,
            fontSize: '0.88rem',
            color: '#00396b',
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
            fontSize: '1rem',
            lineHeight: 1.5,
            color: '#5876a3',
            fontStyle: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            letterSpacing: 'normal',
            fontFamily: 'inherit',
        },
    },
    Text: {
        strong: {
            fontSize: '1rem',
            lineHeight: 1.5,
            color: '#00396b',
            fontStyle: 'normal',
            fontWeight: 500,
            fontStretch: 'normal',
            letterSpacing: 'normal',
            fontFamily: 'inherit',
        },
    },
    Code: {
        code: {
            fontSize: '14px',
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
        },
    },
};
