import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const PADDING_LEFT = 16;

function getMarginLeft(props) {
    const marginLeft = props.ariaLevelValue === 1 ? 0 : PADDING_LEFT;
    return `-${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + marginLeft}px`;
}

function getPaddingLeft(props) {
    if (props.hasChildren) {
        return `${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + PADDING_LEFT}px}`;
    }
    return `${(props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + 28 + PADDING_LEFT}px}`;
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
