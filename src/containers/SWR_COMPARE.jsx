import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UseStateWrapper = styled.div`
    width: 100%;
`

function SWR_COMPARE() {
    const APIUrl = `https://dummyjson.com/products/`
    const [data, setData] = useState(null)
    console.log('SWR_COMPARE data', data)

    useEffect(() => {
        fetch()

        async function fetch() {
            try {
                console.log('SWR_COMPARE fetch data')
                const result = await axios.get(APIUrl)
                setData(result)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    if (!data) return <UseStateWrapper>資料取得中，loading...</UseStateWrapper>
    return (
        <UseStateWrapper>
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

export default SWR_COMPARE
