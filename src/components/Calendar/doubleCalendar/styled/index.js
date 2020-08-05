import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';

export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 0;
    width: 100%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const StyledControlsContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-content: start;
    justify-content: space-between;
    padding: 0 0 8px 0;

    @media (max-width: 768px) {
        &:nth-child(1) {
            order: 1;
        }

        &:nth-child(2) {
            order: 3;
            margin-top: 2rem;
        }
    }
`;

export const StyledCalendar = styled.div`
    @media (max-width: 768px) {
        &:nth-child(3) {
            order: 2;
        }

        &:nth-child(4) {
            order: 4;
        }
    }
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const StyledMonthsContainer = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    flex-grow: 1;
`;

export const StyledMonth = attachThemeAttrs(styled.h3)`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    color: ${props => props.palette.text.main};
    text-transform: capitalize;
    font-weight: 500;
    margin: 0 1rem 0 0;
    padding: 0;
    box-sizing: border-box;
`;
