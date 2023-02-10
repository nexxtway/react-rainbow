import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledStatsCard = attachThemeAttrs(styled.div)`
    border: solid 1px ${props => props.palette.background.highlight};
    background-color: ${props => props.palette.background.secondary};
    padding: 10px 8px 10px 16px;
    display: flex;
    align-items: center;
    margin: 0 16px 16px 16px;
    border-radius: 12px;
`;

export default StyledStatsCard;
