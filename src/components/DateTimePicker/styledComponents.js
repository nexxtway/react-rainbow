import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_2 } from '../../libs/colors';

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 20px 48px 0 32px;
`;

const H2 = styled.h2`
    color: ${COLOR_BRAND};
    font-size: 1.5rem;
    font-weight: 500;
`;

const ResponsiveContainer = styled.div`
    // display: flex;
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
    width: 1rem;
    height: 100%;

    &::after {
        content: '';
        background-color: ${COLOR_GRAY_2};
        margin: 0px auto;
        width: 1px;
        height: 100%;
    }

    @media (max-width: 600px) {
        width: 100%;
        height: 1rem;

        &::after {
            height: 1px;
            width: 100%;
        }
    }
`;

export default {
    Header,
    H2,
    ResponsiveContainer,
    Divider,
};
