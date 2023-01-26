import styled from 'styled-components';
import File from '../../icons/file';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import RadioGroup from '../../../RadioGroup';
import MergeFiles from '../../icons/mergeFiles';

export const OptionContainer = attachThemeAttrs(styled.li)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40rem;
    padding: 8px 14px;
    background-color: ${props => props.palette.border.disabled};
    border-radius: 10px;

    ${props =>
        props.isSelected &&
        `
            background-color: ${props.palette.brand.light};
            border: 1px solid ${props.palette.brand.light};

            svg {
                color: ${props.palette.background.highlight};
            }

            div:nth-child(2) {
                background-color: ${props.palette.brand.main};
            }
        `}

    &:hover {
        background-color: ${props => props.theme.rainbow.palette.brand.light};
        border: 1px solid ${props => props.theme.rainbow.palette.brand.light};
        cursor: pointer;

        svg {
            color: ${props => props.theme.rainbow.palette.background.highlight};
        }

        div:nth-child(2) {
            background-color: ${props => props.theme.rainbow.palette.brand.main};
        }
    }
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
    color: ${props => props.theme.rainbow.palette.text.main};
    font-size: 16px;
    width: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const OptionDescription = attachThemeAttrs(styled.p)`
    font-size: 14px;
    color: ${props => props.theme.rainbow.palette.text.header};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const StyledFile = attachThemeAttrs(styled(File))`
    color: ${props => props.theme.rainbow.palette.text.label};
    flex-shrink: 0;
`;

export const StyledMergeFiles = attachThemeAttrs(styled(MergeFiles))`
    color: ${props => props.theme.rainbow.palette.text.label};
    flex-shrink: 0;
`;

export const IconContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.rainbow.palette.background.highlight};
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
