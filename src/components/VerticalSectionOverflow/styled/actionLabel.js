import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import TruncatedText from '../../Structural/truncatedText';

const StyledActionLabel = attachThemeAttrs(styled(TruncatedText))`
    font-size: 0.9375rem;
    color: ${props => props.palette.brand.main};
    max-width: 100%;
`;

export default StyledActionLabel;
