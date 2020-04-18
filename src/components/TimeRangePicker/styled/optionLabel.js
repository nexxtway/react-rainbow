/* eslint-disable indent */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';

const StyledOptionLabel = attachThemeAttrs(styled.label)`
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${props => replaceAlpha(props.palette.getContrastText(props.palette.brand.main), 0.3)};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.palette.brand.dark};
        border-radius: 4px;
    }

    @media (max-width: 340px) {
        font-size: 22px;
    }
`;

export default StyledOptionLabel;
