import { routesList } from '../config/routes'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const HeaderWrapper = styled.section`
    width: 100%;
`

function Header() {
    const classes = useStyles()

    return (
        <HeaderWrapper className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        My App
                    </Typography>
                    {routesList.map((route) => (
                        <Button color="inherit" component={Link} key={route.title} to={route.path}>
                            {route.title}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </HeaderWrapper>
    )
}

export default Header
