import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const DatabaseFieldContent = attachThemeAttrs(styled.div)`
    background: ${props => props.palette.brand.light};
    color: ${props => props.palette.text.main};
    margin: 8px 20px 8px 0;
    border-radius: 8px;
    padding-left: 12px;
    line-height: 30px;
`;

export default DatabaseFieldContent;
