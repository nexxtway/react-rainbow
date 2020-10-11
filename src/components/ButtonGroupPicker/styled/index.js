import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';
import StyledButtonGroup from './buttonGroup';

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
`;

export { StyledErrorText, StyledHelpText, StyledContainer, StyledButtonGroup };
