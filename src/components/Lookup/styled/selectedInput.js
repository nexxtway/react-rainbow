import styled from 'styled-components';
import { COLOR_GRAY_4, COLOR_GRAY_3 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import Input from '../../Input/styled/input';
import getTheme from '../../../styles/helpers/getTheme';

const StyledSelectedInput = styled(Input).attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;

    return {
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
    };
})`
    box-shadow: inset 0 0 0 3px #fff, inset 0 0 0 4px #dddbda;
    caret-color: transparent;
    color: ${COLOR_GRAY_4};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    padding-right: 2.35rem;
    text-overflow: ellipsis;

    :focus,
    :active {
        box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 3px #dddbda, ${props => props.brandShadow};
        padding-right: 2.35rem;
        text-overflow: ellipsis;
    }

    &[disabled] {
        box-shadow: none;
        color: ${COLOR_GRAY_3};

        &:focus,
        &:active {
            padding-right: 1rem;
        }
    }
`;

export default StyledSelectedInput;
