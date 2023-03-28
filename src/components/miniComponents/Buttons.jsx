import styled from 'styled-components'

const Button = styled.button`
    background-color: ${(props) => (props.color ? `${props.color}` : '#3f51b5')};
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    margin: ${(props) => (props.margin ? `${props.margin}` : '0')};

    &:hover {
        opacity: 0.8;
    }
`

export { Button }
