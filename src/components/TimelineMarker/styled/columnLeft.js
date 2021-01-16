import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { getContrastText, replaceAlpha } from '../../../styles/helpers/color';

const getColor = props => replaceAlpha(getContrastText(props.palette.background.main), 0.1);

const StyledColumnLeft = attachThemeAttrs(styled.div)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    ::before {
        content: '';
        background-color: ${props => getColor(props)};
        height: 100%;
        width: 1px;
        position: absolute;
        right: 50%;
        left: 50%;
    }
`;

export default StyledColumnLeft;
