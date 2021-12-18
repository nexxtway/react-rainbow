import styled from 'styled-components';

const AnimatedContainer = styled.div`
    animation: ${props => props.animation} 250ms forwards;
    overflow: hidden;
    ${props => !props.isVisible && `display: none;`}

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes slideVerticalIn {
        from {
            max-height: 0;
        }

        to {
            max-height: ${props => (props.dimensions ? props.dimensions.height : 9999)}px;
        }
    }

    @keyframes slideVerticalOut {
        from {
            max-height: ${props => (props.dimensions ? props.dimensions.height : 9999)}px;
        }

        to {
            max-height: 0;
        }
    }

    @keyframes slideHorizontalIn {
        from {
            max-width: 0;
        }

        to {
            max-width: ${props => (props.dimensions ? props.dimensions.width : 9999)}px;
        }
    }

    @keyframes slideHorizontalOut {
        from {
            max-width: ${props => (props.dimensions ? props.dimensions.width : 9999)}px;
        }

        to {
            max-width: 0;
        }
    }
`;

export default AnimatedContainer;
