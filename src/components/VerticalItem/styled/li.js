import styled from 'styled-components';
import { COLOR_BRAND } from '../../../styles/colors';

const StyledLi = styled.li`
    position: relative;
    box-sizing: border-box;
    ${props =>
        props.isSelected &&
        `
            ::before {
                content: "";
                width: 0.25rem;
                left: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                background-color: ${COLOR_BRAND};
            }
        `};
`;

export default StyledLi;
