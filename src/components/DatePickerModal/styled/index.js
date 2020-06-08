import styled from 'styled-components';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Modal from '../../Modal';
import Calendar from '../../Calendar';

export const StyledModal = styled(Modal)`
    width: auto !important;
    height: fit-content !important;

    @media (max-width: 600px) {
        border-radius: 0 0 0.975rem 0.975rem !important;
        align-self: flex-start;
        width: 100% !important;
        max-width: 100% !important;
    }
`;

export const StyledCalendar = styled(Calendar)`
    width: 420px;
    padding: 0 8px;
    margin: 20px 0 0 0;
    ${props =>
        props.variant === 'double' &&
        `
            width: 800px;
        `};

    @media (max-width: 600px) {
        width: 100%;
        padding: 0;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: stretch;
    padding: 4px 48px 8px 20px;

    ${props =>
        props.variant === 'single' &&
        `
        width: 420px;
        `};

    ${props =>
        props.variant === 'double' &&
        `
        width: 800px;
        `};
`;

export const HeaderTitle = attachThemeAttrs(styled.h1)`
    display: flex;
    color: ${props => props.palette.brand.main};
    font-size: ${FONT_SIZE_HEADING_LARGE};
    font-weight: 500;
    margin: 0;
    padding: 0;
`;
