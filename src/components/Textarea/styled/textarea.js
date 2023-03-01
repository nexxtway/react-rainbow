import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';

const StyledTextarea = attachThemeAttrs(styled.textarea)`
    border-radius: ${BORDER_RADIUS_1};
    background-color: transparent;
    border: none;
    width: calc(100% - 2rem);
    padding: 0.625rem 1rem;
    resize: none;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.57;
    color: ${props => props.palette.text.main};
    box-sizing: content-box;
    margin: 0;
    overflow: auto;

    ${props =>
        props.size === 'large' &&
        `
            padding: 0.625rem 1.2rem;
            font-size: ${FONT_SIZE_HEADING_MEDIUM};
            width: calc(100% - 2.4rem);
        `};

    ${props =>
        props.size === 'small' &&
        `
            padding: 0.625rem 0.8rem;
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
            width: calc(100% - 1.6rem);
        `};

    :focus,
    :active {
        outline: 0;
        padding: 0.563rem 0.9375rem;
        width: calc(100% - 1.875rem);

        ${props =>
            props.size === 'large' &&
            `
                padding: 0.563rem 1.125rem;
                width: calc(100% - 2.25rem);
            `};
    
        ${props =>
            props.size === 'small' &&
            `
                padding: 0.563rem 0.75rem;
                width: calc(100% - 1.5rem);
            `};
    }

    ::placeholder {
        color: ${props => props.palette.text.header};
        font-size: ${FONT_SIZE_TEXT_LARGE};

        ${props =>
            props.size === 'large' &&
            `
                font-size: ${FONT_SIZE_HEADING_MEDIUM};
            `};
    
        ${props =>
            props.size === 'small' &&
            `
                font-size: ${FONT_SIZE_TEXT_MEDIUM};
            `};
    }

    &[disabled] {
        cursor: not-allowed;
        user-select: none;

        &:focus,
        &:active {
            padding: 0.625rem 1rem;
            width: calc(100% - 2rem);

            ${props =>
                props.size === 'large' &&
                `
                    padding: 0.625rem 1.2rem;
                    width: calc(100% - 2.4rem);
                `};
        
            ${props =>
                props.size === 'small' &&
                `
                    padding: 0.625rem 0.8rem;
                    width: calc(100% - 1.6rem);
                `};
        }

        &::placeholder {
            color: ${props => props.palette.text.disabled};
        }
    }

    &[readonly] {
        padding: 0;
        width: 100%;

        :focus,
        :active {
            width: 100%;
            border-radius: 0;
    }

    ${props =>
        props.error &&
        `
            background-clip: padding-box;

            &:focus,
            &:active {
                padding: 0.625rem 1rem;
                width: calc(100% - 2rem);

                ${props.size === 'large' &&
                    `
                        padding: 0.625rem 1.2rem;
                        width: calc(100% - 2.4rem);
                    `};
            
                ${props.size === 'small' &&
                    `
                        padding: 0.625rem 0.8rem;
                        width: calc(100% - 1.6rem);
                    `};
            }
        `};
`;

export default StyledTextarea;
