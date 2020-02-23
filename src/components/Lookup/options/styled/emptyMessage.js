import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledEmptyMessage = attachThemeAttrs(styled.span)`
    margin-top: 12px;
    width: 90%;
    font-size: 15px;
    color: ${props => props.palette.text.label};
    line-height: 1.7;

    > span {
        color: ${props => props.palette.text.main};
        font-family: 'Lato Black', Arial, sans-serif;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default StyledEmptyMessage;
