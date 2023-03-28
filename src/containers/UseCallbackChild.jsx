import styled from 'styled-components'
import { memo } from 'react'
import { Button } from '../components/miniComponents/Buttons'

const ChildWrapper = styled.div`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
`

const Child = memo(({ resetCount }) => {
    console.log('Child 頁面初始化 or re-render')
    return (
        <ChildWrapper>
            <Button onClick={resetCount}>resetCount</Button>
        </ChildWrapper>
    )
})

export { Child }
