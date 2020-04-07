import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledFileCard = attachThemeAttrs(styled.div)`
    border: solid 1px ${props => props.palette.background.highlight};
    background-color: ${props => props.palette.background.secondary};
    padding: 20px 8px 20px 16px;
    display: flex;
    margin: 0 16px 32px 16px;
    border-radius: 12px;
`;

export default StyledFileCard;
