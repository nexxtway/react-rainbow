/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
    display: inline-flex;

    span {
        border-radius: 0;
        border-width: 1px;
        margin-left: -1px;
        height: 2.5rem;
        line-height: 2.5;

        svg,
        span {
            width: 1rem !important;
            height: 1rem !important;
            font-size: 1rem !important;
        }

        &:focus {
            z-index: 1;
        }

        &:hover {
            z-index: 1;
        }

        ${props =>
            props.size === 'x-small' &&
            `
                height: 1.25rem;
                line-height: 1.25;
    
                svg, span {
                    width: 0.6rem !important;
                    height: 0.6rem !important;
                    font-size: 0.6rem !important;
                }
            `};
        ${props =>
            props.size === 'small' &&
            `
                height: 1.65rem;
                line-height: 1.65;
    
                svg, span {
                    width: 0.65rem !important;
                    height: 0.65rem !important;
            
                    font-size: 0.65rem !important;
                }
            `};
        ${props =>
            props.size === 'large' &&
            `
                height: 3rem;
                line-height: 3;
    
                svg, span {
                    width: 1.5rem !important;
                    height: 1.5rem !important;
                    font-size: 1rem !important;
                }
            `};
    }

    > span:first-child,
    > label:first-child > span {
        border-radius: 100px 0 0 100px;
    }

    > span:last-child,
    > label:last-child > span {
        border-radius: 0 100px 100px 0;
    }

    > span:only-child,
    > label:only-child > span {
        border-radius: 100px;
    }
`;

export default StyledButtonGroup;
