import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledPreviewText = attachThemeAttrs(styled.p)`
    color: ${props => props.palette.text.title};
    font-size: 14px;
    margin: 16px 0 8px 0;
    padding: 0;

    b {
        font-family: 'Lato Black', sans-serif;
        font-weight: bold;
        font-weight: 700;
    }
`;

export default StyledPreviewText;
