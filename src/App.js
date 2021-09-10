import React from 'react'
import Details from './compoenents/details/Details'
import {Grid} from '@material-ui/core'

import useStyles from './styles'
import Main from './compoenents/main/Main'

const App = () => {
    const classes = useStyles();
    return (
        <>
                <Grid className={classes.grid} container  spacing={0} alignItems="center" justify="center" style={{"height":"100vh"}}>
                    <Grid item xs={12} sm={4} >
                        <Details title="Income"/>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Main/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Details title="Expense"/>
                    </Grid>

                </Grid>
        </>
    )
}

export default App
