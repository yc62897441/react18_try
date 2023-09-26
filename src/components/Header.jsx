import { routesList } from '../config/routes'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.section`
    width: 100%;
    padding: 20px;
    background-color: #eeeeee;

    a {
        margin: 0 10px;
        color: black;
        text-decoration: none;

        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
`

function Header() {
    return (
        <HeaderWrapper>
            {routesList.map((route) => (
                <Link to={route.path}>{route.title}</Link>
            ))}
        </HeaderWrapper>
    )
}

export default Header
