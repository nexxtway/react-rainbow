import styled from 'styled-components';
import { COLOR_BRAND } from '../../../styles/colors';

const StyledContainer = styled.li`
    position: relative;
    margin-bottom: 1.375rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;

    :last-child {
        margin-bottom: 0;
    }

    ${props =>
        props.isSelected &&
        `
            ::before {
                content: "";
                width: 0.25rem;
                right: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                background-color: ${COLOR_BRAND};
                border-radius: 100px;
        `};
`;

export default StyledContainer;
