import styled from 'styled-components';
import HiddenElement from '../../Structural/hiddenElement';
import { COLOR_GRAY_2, COLOR_GRAY_1 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledInput = styled(HiddenElement).attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { light: brandLightColor } = brand;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
        brandLightColor,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
    };
})`
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;

    :hover ~ label > [data-id='visual-picker_option'] {
        cursor: pointer;
        border: solid 1.5px ${props => props.brandMainColor};
        box-shadow: 0 2px 4px 0 rgba(136, 152, 170, 0.5);
    }

    :focus ~ label > [data-id='visual-picker_option'] {
        border: solid 1px ${props => props.brandLightColor};
        box-shadow: 0 1px 2px 0 rgba(136, 152, 170, 0.5), ${props => props.brandShadow};
    }

    :checked ~ label > [data-id='visual-picker_option'] {
        border: solid 2px ${props => props.brandMainColor};
        position: relative;
    }

    &[disabled] ~ label > [data-id='visual-picker_option'] {
        border: solid 1.5px ${COLOR_GRAY_2};
        box-shadow: 0 0 0 0 transparent;
        background-color: ${COLOR_GRAY_1};
        cursor: not-allowed;
    }
`;

export default StyledInput;
