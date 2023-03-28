/* 
這個 component 是用來測試什麼樣的變化會 trigger useMemo

測試結果：
1. 頁面初始化時，一般的 calculate() 與 useMemo 的 calculate() 都會執行。
2. re-render 時，只有 一般的 calculate() 會執行。
3. 只有 useMemo 的 calculate() 所依賴的對象有改變時，useMemo 的 calculate() 才會執行。
*/

import styled from 'styled-components'
import { useState, useMemo } from 'react'
import { PageWrapper } from '../components/miniComponents/PageWrapper'
import { PageTitle } from '../components/miniComponents/Titles'
import { Button } from '../components/miniComponents/Buttons'

const ParentWrapper = styled.div`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
`

function Parent() {
    const [parent1, setParent1] = useState(0)
    const [parent2, setParent2] = useState(0)
    console.log('頁面初始化')

    function calculate(value) {
        console.log('一般的 calculate()')
        for (let i = 0; i < 10000; i++) {
            value += i
        }
        return value
    }
    const parent3 = calculate(parent1)

    function calculateUseMemo(value) {
        console.log('useMemo 的 calculate()')
        for (let i = 0; i < 10000; i++) {
            value += i
        }
        return value
    }
    const parent4 = useMemo(() => calculateUseMemo(parent2), [parent2])

    return (
        <ParentWrapper>
            <PageTitle title="This is Parent" />
            {console.log('DOM 生成')}
            <div>parent3(calculate(parent1)出來): {parent3}</div>
            <div>parent4(calculateUseMemo(parent2) 出來，使用 useMemo 存成，依賴 parent2): {parent4}</div>

            <Button
                onClick={() => {
                    setParent1((n) => n + 1)
                }}
            >
                parent1 setState
            </Button>
            <Button
                onClick={() => {
                    setParent2((n) => n + 1)
                }}
            >
                parent2 setState
            </Button>
        </ParentWrapper>
    )
}

function UseMemo() {
    return (
        <PageWrapper>
            <PageTitle title="UseMemo" />
            <p>這個 component 是用來測試什麼樣的變化會 trigger useMemo</p>
            <p>測試結果：</p>
            <p>1. 頁面初始化時，一般的 calculate() 與 useMemo 的 calculate() 都會執行。</p>
            <p>2. re-render 時，只有 一般的 calculate() 會執行。 </p>
            <p>3. 只有 useMemo 的 calculate() 所依賴的對象有改變時，useMemo 的 calculate() 才會執行。</p>
            <Parent />
        </PageWrapper>
    )
}

export default UseMemo
