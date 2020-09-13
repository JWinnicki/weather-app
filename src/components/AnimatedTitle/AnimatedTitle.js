import styled, {keyframes} from 'styled-components';

const animation = ({animationRange}) => {
    return keyframes`
        0% {
            transform: translateX(${animationRange});
        }

        50% {
            transform: translateX(-${animationRange});
        }

        100% {
            transform: translateX(${animationRange});
        }
    `
}

const AnimatedTitle = styled.h1`
    white-space: nowrap;
    position: absolute;
    transform: translateX(${props => props.animationRange});

    animation: ${animation} 4s infinite linear;
`;

export default AnimatedTitle;