import styled from 'styled-components';
import TruncatedText from '../../Structural/truncatedText';
import { COLOR_BRAND } from '../../../styles/colors';

const StyledActionLabel = styled(TruncatedText)`
    font-size: 0.9375rem;
    color: ${COLOR_BRAND};
    max-width: 100%;
`;

export default StyledActionLabel;
