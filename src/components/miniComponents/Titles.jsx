import styled from 'styled-components'

const H1 = styled.h1``

function PageTitle(props) {
    return <H1>{props.title}</H1>
}

export { PageTitle }
