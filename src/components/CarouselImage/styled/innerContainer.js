import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import getTheme from '../../../styles/helpers/getTheme';

const StyledInnerContainer = styled.div.attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;

    return { brandMainColor };
})`
    border-radius: ${BORDER_RADIUS_1};
    overflow: hidden;
    line-height: inherit;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    :hover {
        text-decoration: none;
        color: inherit;
    }

    ${props =>
        props.as === 'a' &&
        `
        :active,
        :focus {
            color: inherit;
            text-decoration: none;
            border: 1px solid ${props.brandMainColor};
            outline: 0;
        }
    `}
`;

export default StyledInnerContainer;
