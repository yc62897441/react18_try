/* 
這個 component 是用來測試 useState 改變時，是否 trigger 父層與子層re-render

測試結果：
1. 父層 useState 改變時，子層也要 re-render
2. 父層 useState 改變時，如果該 state 被傳入到子層當 props 時(就算沒有使用該 props)，子層也要 re-render
3. 父層 useState 改變時，如果子層是以 props 形式傳入到父層使用，子層「不用」re-render
4. 子層 useState 改變時，不影響父層與平行層級
*/

import styled from 'styled-components'
import { useState } from 'react'
import { PageWrapper } from '../components/miniComponents/PageWrapper'
import { PageTitle } from '../components/miniComponents/Titles'
import { Button } from '../components/miniComponents/Buttons'

const ParentWrapper = styled.div`
    width: 100%;
    border: 2px solid green;
    padding: 10px;
    margin: 5px 0;
`

const ChildWrapper = styled.div`
    width: 100%;
    border: 2px solid darkgreen;
    padding: 10px;
    margin: 5px 0;
`

// Child0 有自己獨立的 useState，使用 <Child0 /> 形式放於 <Parent /> 中，沒有接受父層的 state
function Child0() {
    const [child0, setChild0] = useState(0)
    console.log('Child0 初始化')
    return (
        <ChildWrapper>
            <PageTitle title="This is Child0" />
            <div>child0(useState): {child0}</div>
            {console.log('DOM 生成，child0 state:', child0)}
            <Button
                onClick={() => {
                    setChild0((n) => n + 1)
                }}
            >
                child0 setState
            </Button>
        </ChildWrapper>
    )
}

// Child1 有自己獨立的 useState，使用 <Parent Child1={<Child1 />} /> 形式當成 props 傳入 <Parent /> 中
function Child1() {
    const [child1, setChild1] = useState(0)
    console.log('Child1 初始化')
    return (
        <ChildWrapper>
            <PageTitle title="This is Child1" />
            <div>child1(useState): {child1}</div>
            {console.log('DOM 生成，child1 state:', child1)}
            <Button
                onClick={() => {
                    setChild1((n) => n + 1)
                }}
            >
                child1 setState
            </Button>
        </ChildWrapper>
    )
}

// Child2 使用 <Child2 /> 形式放於 <Parent /> 中，接收父層的 state 為 props，並有使用到 props
function Child2(props) {
    console.log('Child2 初始化')
    return (
        <ChildWrapper>
            <PageTitle title="This is Child2" />
            <div>(props from parent1): {props.parent1}</div>
            {console.log('DOM 生成，child2(props from parent1):', props.parent1)}
        </ChildWrapper>
    )
}

// Child3 使用 <Child3 /> 形式放於 <Parent /> 中， 接收父層的 state 為 props，但「沒有」使用到 props
function Child3(props) {
    console.log('Child3 初始化')
    return (
        <ChildWrapper>
            <PageTitle title="This is Child3" />
            {console.log('DOM 生成，child3(有接收 props 但沒有使用)')}
        </ChildWrapper>
    )
}

function Parent(props) {
    const [parent1, setParent1] = useState(0)
    console.log('Parent 初始化')
    return (
        <ParentWrapper>
            <PageTitle title="This is Parent" />
            <div>parent1(useState): {parent1}</div>
            {console.log('DOM 生成，parent1 state:', parent1)}
            <Button
                onClick={() => {
                    setParent1((n) => n + 1)
                }}
            >
                parent1 setState
            </Button>

            <Child0 />
            {props.Child1}
            <Child2 parent1={parent1} />
            <Child3 parent1={parent1} />
        </ParentWrapper>
    )
}

function ChildrenRender() {
    return (
        <PageWrapper>
            <PageTitle title="ChildrenRender" />
            <p>這個 component 是用來測試 useState 改變時，是否 trigger 父層與子層re-render</p>
            <p>測試結果：</p>
            <p>1. 父層 useState 改變時，子層也要 re-render</p>
            <p>2. 父層 useState 改變時，如果該 state 被傳入到子層當 props 時(就算沒有使用該 props)，子層也要 re-render</p>
            <p>3. 父層 useState 改變時，如果子層是以 props 形式傳入到父層使用，子層「不用」re-render</p>
            <p>4. 子層 useState 改變時，不影響父層與平行層級</p>
            <Parent Child1={<Child1 />} />
        </PageWrapper>
    )
}

export default ChildrenRender
