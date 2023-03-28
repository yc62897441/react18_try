/* 
這個 component 是用 useCallback + memo，減少 Child component 不必要渲染

實作方式：
1. 用 useCallback() 建立需要傳入到 <Child / > 當 props 的 function。如果 useCallback() 的 dependencies 沒有改變，會一直記憶著回傳函數，不會改變。
2. 用 memo() 建立 <Child / >。如果傳入 props 沒有改變，就不會重新 render。

參考網址：
https://ithelp.ithome.com.tw/m/articles/10270317

說明：
1. useCallback(callback): 如果沒有加上這個陣列，每次都會重新執行函式去產生新的函式
2. useCallback(callback, []): 空陣列的話，回傳的函式不會改變
3. useCallback(callback, [...someValues]): 有加上一些元素值的話，當元素值改變時會重新更新回傳的函式
4. 透過 useCallback 可以記住 function 的記憶體位置，就可以避免 React.memo 在比較 props 值時因為"物件型別記憶體位置不同但值相同"而重新渲染的狀況。
*/

import styled from 'styled-components'
import { useState, useCallback } from 'react'
import { PageWrapper } from '../components/miniComponents/PageWrapper'
import { PageTitle } from '../components/miniComponents/Titles'
import { Button } from '../components/miniComponents/Buttons'
import { Child } from './UseCallbackChild'

const ParentWrapper = styled.div`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
`

function Parent() {
    const [count, setCount] = useState(0)
    console.log('Parent 頁面初始化 or re-render')

    // 每次 Parent re-render 時，resetCount 不會改變
    // useCallback(callback): 如果沒有加上這個陣列，每次都會重新執行函式去產生新的函式
    // useCallback(callback, []): 空陣列的話，回傳的函式不會改變
    // useCallback(callback, [...someValues]): 有加上一些元素值的話，當元素值改變時會重新更新回傳的函式
    const resetCount = useCallback(() => {
        setCount(0)
    }, [])
    // 每次 Parent re-render 時，resetCount 會改變
    // const resetCount = () => {
    //     setCount(0)
    // }

    return (
        <ParentWrapper>
            <PageTitle title="This is Parent" />
            {console.log('Parent DOM 生成')}
            <div>count: {count}</div>
            <Button
                onClick={() => {
                    setCount((count) => count + 1)
                }}
            >
                count++ setState
            </Button>
            <Child resetCount={resetCount} />
        </ParentWrapper>
    )
}

function UseCallback() {
    return (
        <PageWrapper>
            <PageTitle title="UseCallback" />
            <p>這個 component 是用 useCallback + memo，減少 Child component 不必要渲染</p>
            <p>實作方式：</p>
            <p>1. 用 useCallback() 建立需要傳入到 Child 當 props 的 function。如果 useCallback() 的 dependencies 沒有改變，會一直記憶著回傳函數，不會改變。</p>
            <p>2. 用 memo() 建立 Child。如果傳入 props 沒有改變，就不會重新 render。</p>
            <p>參考網址：https://ithelp.ithome.com.tw/m/articles/10270317</p>
            <p>說明：</p>
            <p>1. useCallback(callback): 如果沒有加上這個陣列，每次都會重新執行函式去產生新的函式</p>
            <p>2. useCallback(callback, []): 空陣列的話，回傳的函式不會改變</p>
            <p>3. useCallback(callback, [...someValues]): 有加上一些元素值的話，當元素值改變時會重新更新回傳的函式</p>
            <p>4. 透過 useCallback 可以記住 function 的記憶體位置，就可以避免 React.memo 在比較 props 值時因為"物件型別記憶體位置不同但值相同"而重新渲染的狀況。</p>
            <Parent />
        </PageWrapper>
    )
}

export default UseCallback
