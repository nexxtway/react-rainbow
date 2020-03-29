import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { PADDING_SMALL } from '../../../styles/paddings';

const StyledContainer = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.background.main};
    padding: ${PADDING_SMALL};
    border: 1px solid ${props => props.palette.border.divider};
    display: flex;
    flex-direction: column;
    height: 100%;

`;

export default StyledContainer;
