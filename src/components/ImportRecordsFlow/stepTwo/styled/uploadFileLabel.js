import styled from 'styled-components';
import { SHADOW_OUTLINE } from '../../../../styles/shadows';
import { COLOR_BRAND_ACTIVE, COLOR_WHITE } from '../../../../styles/colors';

const StyledUploadFileLabel = styled.label`
    background-color: #01b6f5;
    border: 1px solid #01b6f5;
    color: white;
    padding: 0 1rem;
    text-align: center;
    vertical-align: middle;
    transition: border 0.15s linear;
    align-items: center;
    display: inline-flex;
    font-size: 1rem;
    justify-content: center;
    position: relative;
    background-clip: border-box;
    border-radius: 100px;
    line-height: 2.375rem;
    text-decoration: none;
    cursor: pointer;
    white-space: normal;
    user-select: none;
    box-sizing: border-box;

    &:focus {
        outline: 0;
        box-shadow: ${SHADOW_OUTLINE};
    }

    &:active {
        color: ${COLOR_BRAND_ACTIVE};
        transform: scale(0.95);
        transition: all 0.2s ease;
        text-decoration: none;
    }

    &:hover,
    &:focus,
    &:active {
        background-color: ${COLOR_BRAND_ACTIVE};
        border-color: ${COLOR_BRAND_ACTIVE};
        color: ${COLOR_WHITE};
    }
`;

export default StyledUploadFileLabel;
