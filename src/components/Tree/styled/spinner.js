import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Spinner from '../../Spinner';

const BrandSpinner = attachThemeAttrs(styled(Spinner))`
    color: ${props => props.palette.brand.main};
    margin-top: 18px;
    margin-left: 8px;
    position: relative;
    top: inherit;
    left: inherit;
`;

export default BrandSpinner;
