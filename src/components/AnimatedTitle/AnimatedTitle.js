import styled from 'styled-components';

const AnimatedTitle = styled.h1`
    white-space: nowrap;
    position: absolute;
    transform: translateX(${props => props.animationRange});

    animation: movingAnimation 4s infinite linear;
    
    @keyframes movingAnimation {
        0% {
            transform: translateX(${props => props.animationRange});
        }

        50% {
            transform: translateX(-${props => props.animationRange});
        }

        100% {
            transform: translateX(${props => props.animationRange});
        }
    }
`;

export default AnimatedTitle;