import styled from 'styled-components';
import TruncatedText from '../../Structural/truncatedText';
import getTheme from '../../../styles/helpers/getTheme';

const StyledActionLabel = styled(TruncatedText).attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    font-size: 0.9375rem;
    color: ${props => props.brandMainColor};
    max-width: 100%;
`;

export default StyledActionLabel;
