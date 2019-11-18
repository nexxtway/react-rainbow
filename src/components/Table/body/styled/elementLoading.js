import styled from 'styled-components';

const StyledElementLoading = styled.div`
    height: 10px;
    object-fit: contain;
    border-radius: 24px;
    z-index: 1;
    background: #fbfbfd
        linear-gradient(
            90deg,
            rgba(227, 229, 237, 0.01) 0%,
            rgba(227, 229, 237, 0.65) 50%,
            rgba(227, 229, 237, 0.01) 100%
        );
    background-size: 400% 400%;
    animation: gradient 2.5s ease-in-out infinite;

    @keyframes gradient {
        0% {
            background-position: 14% 0;
        }

        50% {
            background-position: 87% 100%;
        }

        100% {
            background-position: 14% 0;
        }
    }
`;

export default StyledElementLoading;
