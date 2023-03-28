import { useState, useEffect } from 'react'
import { PageWrapper } from '../components/miniComponents/PageWrapper'
import { PageTitle } from '../components/miniComponents/Titles'
import { Button } from '../components/miniComponents/Buttons'

function LifeCircleTry() {
    const [state1, setState1] = useState(0)
    useEffect(() => {
        console.log('Mounted 執行 useEffect 內的程式')

        return () => {
            console.log('unMounted 執行 useEffect return 內的程式')
        }
    }, [state1])

    console.log('元件初始化')
    console.log('狀態初始化，可使用 useState，state:', state1)

    return (
        <PageWrapper>
            {console.log('DOM 生成，state:', state1)}
            <PageTitle title="title" />
            <Button
                margin="0"
                color="#3f51b5"
                onClick={() => {
                    console.log('接下來要執行 setState')
                    setState1((n) => n + 1)
                }}
            >
                state1 setState
            </Button>
        </PageWrapper>
    )
}

export default LifeCircleTry
