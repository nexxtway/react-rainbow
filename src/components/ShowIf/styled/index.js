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

    @keyframes slideIn {
        from {
            max-height: 0;
        }

        to {
            max-height: ${props => (props.dimensions ? props.dimensions.height : 9999)}px;
        }
    }

    @keyframes slideOut {
        from {
            max-height: ${props => (props.dimensions ? props.dimensions.height : 9999)}px;
        }

        to {
            max-height: 0;
        }
    }
`;

export default AnimatedContainer;
