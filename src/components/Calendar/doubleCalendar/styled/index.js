import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';

export const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledCalendarWrapper = styled.div`
    flex: 1;
`;

export const StyledCalendar = styled.div`
    display: flex;
    flex: 1;
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    align-content: start;
`;

export const StyledDivider = styled.div`
    display: flex;
    min-width: 2.5rem;
    height: 2.5rem;
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
