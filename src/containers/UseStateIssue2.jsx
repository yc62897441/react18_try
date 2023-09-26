import { useState } from 'react'
import styled from 'styled-components'
import DividingLine from '../components/DividingLine'

const UseStateWrapper = styled.div`
    width: 100%;
`

const ChildWrapper = styled.div`
    width: 100%;
    border: 2px solid firebrick;
`

function Child({ propState }) {
    const [childState, setChildState] = useState(propState)

    console.log('propState', propState)
    console.log('childState', childState)

    return <ChildWrapper>Child</ChildWrapper>
}

function UseStateIssue2() {
    const [parentState, setParentState] = useState('parentState')

    return (
        <UseStateWrapper>
            <h1>UseStateIssue2</h1>
            <h2>說明</h2>
            <p>測試把父層傳入的 props 設為子層的 state</p>
            <p>測試 static getDerivedStateFromProps(props, state)</p>


            <h2>專案版本</h2>
            <p>react: ^18.2.0</p>
            <DividingLine />

            <Child propState={parentState} />
        </UseStateWrapper>
    )
}

export default UseStateIssue2
