import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledStep = attachThemeAttrs(styled.li)`
    display: inline-flex;
    align-self: center;
    justify-content: center;
    box-sizing: border-box;
    flex-grow: 1;
    position: relative;

    :not(:first-child),
    :not(:last-child) {
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            display: block;
            width: 100%;
            height: 1px;
            border: solid 0.5px ${props => props.palette.border.divider};
            margin: -0.5px 0 0;
        }
    }

    :first-child {
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            width: 50%;
            height: 1px;
            border: solid 0.5px ${props => props.palette.border.divider};
            margin: -0.5px 0 0;
        }
    }

    :last-child {
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            right: 50%;
            display: block;
            width: 50%;
            height: 1px;
            border: solid 0.5px ${props => props.palette.border.divider};
            margin: -0.5px 0 0;
        }
    }
    
`;

export default StyledStep;
