import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';

const StyledOl = attachThemeAttrs(styled.ol)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

    li > a {
        text-decoration: none;
    }

    > li:last-child > a {
        font-weight: 900;
        color: ${props => props.palette.text.main};
        text-decoration:none;
    }

    > li:last-child > button {
        font-weight: 900;
        color: ${props => props.palette.text.main};
    }

    li:not(:last-child){
        padding:1px 0;
    }

    li:last-child:active > button {        
        font-size: ${FONT_SIZE_TEXT_SMALL};
    }

    li:last-child:active > a {
        font-size: ${FONT_SIZE_TEXT_SMALL};
    }

    li:last-child::after {
        display: block;
        content: "";
        border-bottom: 2px solid ${props => props.palette.brand.main};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    li:last-child:hover::after {
        transform: scaleX(1);
    }

    > li:not(:last-child)::after {
        margin: 0 10px;
        content: '>';
        color: ${props => props.palette.text.label};
    }
`;

export default StyledOl;
