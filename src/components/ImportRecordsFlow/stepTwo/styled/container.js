import styled from 'styled-components';
import attachThemeAttrs from '../../../../../src/styles/helpers/attachThemeAttrs';
import replaceAlpha from '../../../../styles/helpers/color/replaceAlpha';

const StyledContainer = attachThemeAttrs(styled.div)`
    border-radius: 4px;
    border: dashed 1px;
    border-color: #eaeef5;
    background-color: #fcfcfc;
    height: 260px;
    margin: 0 16px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${props =>
        props.isDragOver &&
        `
            background-color: ${replaceAlpha(props.palette.brand.main, 0.05)};
            border-color: ${props.palette.brand.light};
        `};
`;

export default StyledContainer;
