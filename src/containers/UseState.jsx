import { useState, useEffect } from 'react'
import styled from 'styled-components'
import DividingLine from '../components/DividingLine'

const UseStateWrapper = styled.div`
    width: 100%;
`

function UseState() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        const countAdd = document.querySelector('#countAdd')

        const handleAdd = (event) => {
            setCount(Number(event.target.value) + 1)
            console.log('event.target.value', Number(event.target.value))
        }

        countAdd.addEventListener('click', handleAdd)

        return () => {
            countAdd.removeEventListener('click', handleAdd)
        }
    }, [])

    return (
        <UseStateWrapper>
            <h1>UseState</h1>
            <h2>說明</h2>
            <p>
                來源: <a href="https://ithelp.ithome.com.tw/articles/10257994">https://ithelp.ithome.com.tw/articles/10257994</a>
            </p>
            <p>「React 18後，所有的setState都會是非同步的。」</p>
            <p>在auto batching下，無論是透過SyntheticEvent、原生event還是setTimeout等，任何呼叫setState的方式都會實作batching機制。</p>
            <h2>專案版本</h2>
            <p>react: ^18.2.0</p>

            <DividingLine />

            <h2>使用 addEventListener 掛載</h2>
            <p>有batching機制，所以setState是非同步的。</p>
            <p>所以畫面上的 count 的值會比 console.log() 出來的值還要新</p>

            <p>在React 17以前 &rarr; 由於batching機制不存在，setState就會是同步的。</p>
            <p>在React 17以前 &rarr; 所以畫面上的 count 的值會跟 console.log() 出來的值一樣</p>
            <div>count: {count}</div>
            <button id="countAdd" value={Number(count)}>
                count + 1
            </button>

            <DividingLine />

            <h2>使用 onClick 掛載</h2>
            <p>有batching機制，所以setState是非同步的。</p>
            <p>所以畫面上的 count 的值會比 console.log() 出來的值還要新</p>
            <div>count2: {count2}</div>
            <button
                value={Number(count2)}
                onClick={(event) => {
                    setCount2(Number(event.target.value) + 1)
                    console.log('event.target.value', Number(event.target.value))
                }}
            >
                count2 + 1
            </button>
        </UseStateWrapper>
    )
}

export default UseState
