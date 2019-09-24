import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_2 } from '../../libs/colors';
import NSModal from '../Modal';

const Container = styled.div`
    width: 100%;
`;
const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 20px 48px 0 32px;

    @media (max-width: 600px) {
        padding-top: 10px;
    }
`;

const H2 = styled.h2`
    color: ${COLOR_BRAND};
    font-size: 1.5rem;
    font-weight: 500;
`;

const ResponsiveContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

    @media (max-width: 600px) {
        padding: 0.5rem;
    }
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
    width: 2rem;

    &::after {
        content: '';
        background-color: ${COLOR_GRAY_2};
        margin: 0 auto;
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

const Modal = styled(NSModal)`
    &.rainbow-modal {
        width: auto;
    }

    & > .rainbow-modal_content {
        max-height: none;
        padding: 0;
    }

    @media (max-width: 600px) {
        align-self: flex-start;

        &.rainbow-modal {
            border-radius: 0 0 0.875rem 0.875rem;
        }

        & .rainbow-time-picker_time-select-content {
            margin-top: 0;
            height: 76px;
        }
    }
`;

export default {
    Container,
    Header,
    H2,
    ResponsiveContainer,
    Divider,
    Modal,
};
