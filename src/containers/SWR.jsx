import useSWR from 'swr'
import axios from 'axios'
import styled from 'styled-components'

const UseStateWrapper = styled.div`
    width: 100%;
`

const fetcher = (url) =>
    axios.get(url).then((result) => {
        // console.log('Page component SWR: fetch data 1', url)
        // console.log('result', result)
        console.log('SWR', new Date().toString())
        result.data.products[0].title = new Date().toString()
        return result
    })

function SWR() {
    const APIUrl = 'https://dummyjson.com/products/'
    const { data, error } = useSWR([APIUrl], fetcher)
    console.log('SWR data', data)

    if (error) return <UseStateWrapper>資料取得發生錯誤</UseStateWrapper>
    if (!data) return <UseStateWrapper>資料取得中，loading...</UseStateWrapper>
    return (
        <UseStateWrapper>
            <div>
                <h1>使用 swr 來打 API 取得資料</h1>
                <h3>第一次進入畫面時，因 data 尚不存在，所以會顯示 loading。</h3>
                <h3>
                    第二次進入畫面時，因 data 已經有被暫存，所以會直接顯示 data
                    渲染的內容。另外，再去打一次 API，取得更新的資料。
                </h3>
                <h3>
                    如果是使用 useEffect 搭配 axios 來打 API 取得資料，之後存到 useState
                    中，就不會有暫存機制。每次進到頁面時，data 都是不存在的，所以都會顯示 loading。
                </h3>
                <h3>
                    但注意的是，不論使用 swr 或是 useEffect，每次進入頁面時，都還是會執行打 API
                    的動作。
                </h3>
            </div>

            <br />

            <div>
                {data?.data?.products?.length > 0 &&
                    data?.data?.products.map((product, index) => (
                        <div key={product?.title + index}>
                            <div>{product?.title}</div>
                            <div>{product?.description}</div>
                            <br />
                        </div>
                    ))}
            </div>
        </UseStateWrapper>
    )
}

export default SWR
