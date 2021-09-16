import styled from 'styled-components';
import { labelAlignmentMap } from '../../Input/label/labelText';
import Label from '../../Input/label';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const StyledFieldset = styled.fieldset`
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const StyledItemsContainer = styled.div`
    align-self: ${props => labelAlignmentMap[props.labelAlignment] || labelAlignmentMap.center};
`;

export const StyledLabel = styled(Label)`
    padding-left: 0;
    padding-right: 0;
`;

export const StyledStarContainer = attachThemeAttrs(styled.span)`
    line-height: inherit;
    height: inherit;
    color: ${props => props.palette.warning.main};

    :not(:last-child) {
        margin-right: 0.25rem;
    }

    display: ${props => (props.readOnly ? '' : 'inline-block')};
    transition: transform 300ms ease-in-out;

    &:hover {
        transform: scale(1.5);
    }
`;

export const StyledStarInput = attachThemeAttrs(styled.input)`
    box-sizing: border-box;
    position: absolute;
    opacity: 0;
    width: 22px;
    height: 22px;
    cursor: pointer;
    color: inherit;
    font: inherit;
    margin: 2px 0;
    line-height: normal;
    padding: 0;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :-ms-input-placeholder {
        color: ${props => props.palette.text.label};
        font-weight: 400;
        font-size: 0.8125rem;
    }
`;
