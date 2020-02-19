import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCell = attachThemeAttrs(styled.th)`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    :first-child > div {
        padding-left: 18px;
    }

    :focus {
        outline: none;

        > div {
            border-color: ${props => props.palette.brand.main};
        }
    }
`;

export default StyledCell;
