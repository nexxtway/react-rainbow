import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

function getMarginLeft(props) {
    return `-${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1}px`;
}

function getPaddingLeft(props) {
    if (props.hasChildren) {
        return `${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1}px}`;
    }
    return `${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + 28}px}`;
}

const NodeContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${getMarginLeft};
    padding-left: ${getPaddingLeft};

    &:hover {
        cursor: pointer;
        background-color: ${props => props.palette.background.highlight};
    }

    ${props =>
        props.isSelected &&
        `
        background-color: ${props.palette.brand.light};

        &:hover {
            background-color: ${props.palette.brand.light};
        }
    `};
`;

export default NodeContainer;
