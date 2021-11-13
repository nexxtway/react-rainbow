/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Input from '../Input';
import Card from '../Card';

export const StyledContainer = styled.div`
    width: 100%;
`;

export const StyledInput = styled(Input)`
    cursor: default;
`;

export const StyledCard = styled(Card)`
    padding: 10px;
`;

export const StyledContent = styled.div`
    width: 19rem;
`;
