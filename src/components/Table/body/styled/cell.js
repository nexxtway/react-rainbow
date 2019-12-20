import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';

const StyledCell = styled.th.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;

    return {
        brandMainColor,
    };
})`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    :first-child > div {
        padding-left: 18px;
    }

    :focus {
        outline: none;

        > div {
            border-color: ${props => props.brandMainColor};
        }
    }
`;

export default StyledCell;
