import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themes } from './themes';

const StyledTheme = styled.div`
    ${props => props.theme}
`;

export default function HighlightTheme(props) {
    const { id, className, style, theme, children } = props;
    const styledTheme = themes[theme] || themes['github-gist'];

    return (
        <StyledTheme id={id} className={className} style={style} theme={styledTheme}>
            {children}
        </StyledTheme>
    );
}

HighlightTheme.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

HighlightTheme.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    theme: 'github-gist',
    children: [],
};
