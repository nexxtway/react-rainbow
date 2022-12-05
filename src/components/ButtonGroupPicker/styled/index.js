import styled from 'styled-components';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';
import StyledButtonGroup from './buttonGroup';
import {
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';

const StyledErrorText = styled(ErrorText)`
    text-align: center;
`;

const StyledHelpText = styled(HelpText)`
    text-align: center;
`;

const StyledContainer = styled.fieldset`
    margin: 0;
    padding: 0;
    border: 0;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE} !important;
            label:first-child > span {
                border-radius: ${BORDER_RADIUS_SQUARE} 0 0 ${BORDER_RADIUS_SQUARE} !important;
            };
            label:last-child > span {
                border-radius: 0 ${BORDER_RADIUS_SQUARE} ${BORDER_RADIUS_SQUARE} 0 !important;
            };
        `};
    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE} !important;
            label:first-child > span {
                border-radius: ${BORDER_RADIUS_SEMI_SQUARE} 0 0 ${BORDER_RADIUS_SEMI_SQUARE} !important;
            };
            label:last-child > span {
                border-radius: 0 ${BORDER_RADIUS_SEMI_SQUARE} ${BORDER_RADIUS_SEMI_SQUARE} 0 !important;
            };
        `};
    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED} !important;
            label:first-child > span {
                border-radius: ${BORDER_RADIUS_SEMI_ROUNDED} 0 0 ${BORDER_RADIUS_SEMI_ROUNDED} ;
            };
            label:last-child > span {
                border-radius: 0 ${BORDER_RADIUS_SEMI_ROUNDED} ${BORDER_RADIUS_SEMI_ROUNDED} 0 ;
            };

        `};
`;

export { StyledErrorText, StyledHelpText, StyledContainer, StyledButtonGroup };
