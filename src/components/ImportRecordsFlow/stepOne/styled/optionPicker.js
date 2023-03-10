import styled from 'styled-components';
import File from '../../icons/file';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import RadioGroup from '../../../RadioGroup';
import MergeFiles from '../../icons/mergeFiles';
import {
    BORDER_RADIUS_SEMI_ROUNDED,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SQUARE,
} from '../../../../styles/borderRadius';

export const OptionContainer = attachThemeAttrs(styled.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40rem;
    padding: 12px 16px 12px 20px;
    background-color: ${props => props.palette.background.secondary};
    border-radius: 10px;
    margin-top: -16px;

    ${props =>
        props.isSelected &&
        `
            background-color: ${props.palette.brand.light};

            svg {
                color: ${props.palette.background.highlight};
            }

            div:nth-child(2) {
                background-color: ${props.palette.brand.main};
            }
        `}

    &:hover {
        background-color: ${props => props.palette.brand.light};
        cursor: pointer;

        svg {
            color: ${props => props.palette.background.highlight};
        }

        div:nth-child(2) {
            background-color: ${props => props.palette.brand.main};
        }
    }

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};
    
    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE};
        `};
    
    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};
`;

export const OptionLeftContent = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const OptionName = attachThemeAttrs(styled.h3)`
    color: ${props => props.palette.text.main};
    font-size: 16px;
    width: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const OptionDescription = attachThemeAttrs(styled.p)`
    font-size: 14px;
    color: ${props => props.palette.text.label};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const StyledFile = attachThemeAttrs(styled(File))`
    color: ${props => props.palette.text.label};
    flex-shrink: 0;
`;

export const StyledMergeFiles = attachThemeAttrs(styled(MergeFiles))`
    color: ${props => props.palette.text.label};
    flex-shrink: 0;
`;

export const IconContainer = attachThemeAttrs(styled.div)`
    display: flex;
    background-color: ${props => props.palette.background.main};
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
    .rainbow-input_faux {
        visibility: hidden;
    }
`;
