import styled, { css } from 'styled-components';
import { PADDING_MEDIUM } from '../../../styles/paddings';

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    align-items: flex-start;
    justify-content: flex-start;

    ${({ orientation }) =>
        orientation === 'horizontal' &&
        css`
            & > div {
                padding-right: ${PADDING_MEDIUM};
            }
        `}
`;

StyledContentContainer.displayName = 'RadioGroupStyledContentContainer';

export default StyledContentContainer;
