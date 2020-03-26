import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Spinner from '../../Spinner';

const BrandSpinner = attachThemeAttrs(styled(Spinner))`
    color: ${props => props.palette.brand.main};
    margin-right: 8px;
`;

export default BrandSpinner;
