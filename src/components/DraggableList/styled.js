import styled from 'styled-components';
import Icon from './icon';

export const Container = styled.ul`
    list-style-type: none;
`;

export const ItemContainer = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.rainbow.palette.background.main};
    border-radius: 12px;
    padding: 8px 12px;
    background: ${props => props.theme.rainbow.palette.background.main};
    box-shadow: ${props => props.theme.rainbow.shadows.shadow_3};
    font-size: 1rem;
    color: ${props => props.theme.rainbow.palette.text.main};

    :not(:last-child) {
        margin-bottom: 6px;
    }

    :hover {
        cursor: move;
        box-shadow: ${props => props.theme.rainbow.shadows.shadow_2};
        transition: all 0.2s ease;
    }

    :focus {
        cursor: move;
        box-shadow: ${props => props.theme.rainbow.shadows.shadow_2};
        transition: all 0.2s ease;
        border: 1px solid ${props => props.theme.rainbow.palette.border.divider};
        outline: none;
    }

    ${props =>
        props.isDragging &&
        `
        box-shadow: ${props.theme.rainbow.shadows.shadow_6};
        transition: all 0.2s ease;
        border: 1px solid ${props.theme.rainbow.palette.border.divider};
    `}
`;

export const StyledIcon = styled(Icon)`
    color: ${props => props.theme.rainbow.palette.text.header};
    width: 8px;
    height: 16px;
    margin-right: 12px;
`;
