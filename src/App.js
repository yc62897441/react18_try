import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'

import './index.css'

// 各 route 頁面
import HomePage from './containers/HomePage.jsx'
import LifeCircleTry from './containers/LifeCircleTry.jsx'
import ChildrenRender from './containers/ChildrenRender.jsx'
import SWR from './containers/SWR.jsx'
import SWR_COMPARE from './containers/SWR_COMPARE.jsx'
import UseMemo from './containers/UseMemo.jsx'
import UseCallback from './containers/UseCallback.jsx'
import UseState from './containers/UseState.jsx'
import UseStateIssue2 from './containers/UseStateIssue2.jsx'

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/LifeCircleTry" element={<LifeCircleTry />} />
                    <Route path="/ChildrenRender" element={<ChildrenRender />} />
                    <Route path="/SWR" element={<SWR />} />
                    <Route path="/SWR_COMPARE" element={<SWR_COMPARE />} />
                    <Route path="/UseMemo" element={<UseMemo />} />
                    <Route path="/UseCallback" element={<UseCallback />} />
                    <Route path="/UseState" element={<UseState />} />
                    <Route path="/UseStateIssue2" element={<UseStateIssue2 />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
