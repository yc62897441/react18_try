import styled from 'styled-components'

const DividingLineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    color: #ffffff;
    background-color: firebrick;
`

function DividingLine() {
    return <DividingLineWrapper>This is the DividingLine.</DividingLineWrapper>
}

export default DividingLine
