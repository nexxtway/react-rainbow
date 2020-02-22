import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { PADDING_LARGE } from '../../../styles/paddings';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledButtonItemLabel = attachThemeAttrs(styled.label)`
    display: inline-flex;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${props => props.palette.text.header};
    padding: 0 ${PADDING_LARGE};
    font-weight: 400;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }
    ${props => {
        const brandContrastColor = props.palette.getContrastText(props.palette.brand.main);

        return `
                ${props.isChecked &&
                    `
                    color: ${props.palette.text.main};
                `};
                ${props.disabled &&
                    `   
                    background-color: transparent;
                    color: ${props.palette.text.disabled};
        
                    :hover {
                        cursor: not-allowed;
                    }
                `};
                ${props.variant === 'brand' &&
                    props.isChecked &&
                    `
                    color: ${brandContrastColor};
                `};
                ${props.variant === 'inverse' &&
                    props.isChecked &&
                    `
                    color: ${brandContrastColor};
                `};
            `;
    }};

`;

export default StyledButtonItemLabel;
