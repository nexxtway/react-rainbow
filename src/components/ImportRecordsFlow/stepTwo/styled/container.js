import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledContainer = styled.div.attrs(props => {
    const theme = getTheme(props);
    const { brand } = theme.palette;
    const { light: brandLightColor } = brand;

    return {
        brandLightColor,
    };
})`
    border-radius: 4px;
    border: dashed 1px #eaeef5;
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
            background-color: rgba(234, 238, 245, 0.4);
            border: dashed 1.5px ${props.brandLightColor};
        `};
`;

export default StyledContainer;
