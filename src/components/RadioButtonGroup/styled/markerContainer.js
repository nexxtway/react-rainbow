import styled from 'styled-components';

const sizeMap = { large: '3rem', medium: '2.5rem', small: '1.8rem', 'x-small': '1.3rem' };
const StyledMarkerContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    line-height: ${props => sizeMap[props.size] || sizeMap.medium};
    height: ${props => sizeMap[props.size] || sizeMap.medium};
`;

export default StyledMarkerContainer;
