import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledHearderDays = attachThemeAttrs(styled.div)`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    overflow: hidden;
    position: relative;
    align-items: flex-start;

    > div:first-child {
        width: 9px;
        min-width: 9px;
        height: 100%;
    }

    > div:last-child {
        width: 16px;
        min-width: 16px;
        height: 100%;
    }
`;

export default StyledHearderDays;
