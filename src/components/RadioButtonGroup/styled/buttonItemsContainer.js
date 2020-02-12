import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

function getBackground(props) {
    if (props.palette.isDark) {
        return {
            main: 'rgba(0, 0, 0, 0.4)',
            inverse: 'rgba(227, 229, 237, 0.4)',
        };
    }
    return {
        main: 'rgba(227, 229, 237, 0.4)',
        inverse: 'rgba(0, 0, 0, 0.4)',
    };
}

function getBorder(props) {
    if (props.palette.isDark) {
        return {
            main: 'rgba(0, 0, 0, 0.4)',
            inverse: props.palette.border.divider,
        };
    }
    return {
        main: props.palette.border.divider,
        inverse: 'rgba(0, 0, 0, 0.4)',
    };
}

const StyledButtonItemsContainer = attachThemeAttrs(styled.div)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px ${props => getBorder(props).main};
    background-color: ${props => getBackground(props).main};
    line-height: 2.5rem;
    height: 2.5rem;

    > :first-child {
        margin-left: -1px;
    }

    > :last-child {
        margin-right: -2px;
    }

    ${props =>
        props.variant === 'inverse' &&
        `
            border-color: ${getBorder(props).inverse};
            background-color: ${getBackground(props).inverse};
        `};
`;

export default StyledButtonItemsContainer;
