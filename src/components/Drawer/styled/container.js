import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    width: 30vw;
    min-width: 280px;
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: normal;
    position: absolute;
    padding: 0;
    height: 100vh;
    min-height: 100%;
    max-height: 100%;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    top: 0;
    right: 0;
    
    // bottom: 0;
    // left: 0;

    &:focus {
        outline: 0;
    }



    //animations

    @keyframes slide-right-in {
        0% {
            transform: translate(70%);
        }

        100% {
            transform: translateY(0);
        }
    }

`;

export default StyledContainer;
