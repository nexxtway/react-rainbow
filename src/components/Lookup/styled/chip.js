import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Chip from '../../Chip';

const StyledChip = attachThemeAttrs(styled(Chip))`
    flex: 1 1 auto;
    margin: 2px;
    background-color: ${props => props.palette.background.main};
    width: 0px;

    & > span {
        min-width: 0px;
        flex-basis: 99%;    
    }
`;

export default StyledChip;
