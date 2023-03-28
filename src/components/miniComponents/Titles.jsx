import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2, 0),
    },
    button: {
        margin: theme.spacing(1),
    },
}))

function PageTitle(props) {
    const classes = useStyles()

    return (
        <Typography variant="h4" className={classes.title}>
            {props.title}
        </Typography>
    )
}

export { PageTitle }
