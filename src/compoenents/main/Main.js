import React, { useContext } from 'react'
import { Card, CardContent, CardHeader, Divider, Typography, Grid } from '@material-ui/core'

import { ExpenseTrackerContext } from "../../Context/Context"
import useStyles from './styles'
import Form from './Form/Form'
import List from './list/List'

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <>
            <Card className={classes.root} >
                <CardHeader title="aMoneys" align="center" subheader="Created By Abdul Aabid Khan" />
                <CardContent >
                    <Typography variant="h6" align="center">
                        Total Balance: Rs {balance}
                    </Typography>
                    {/* <Typography variant="subtitle1" style={{"marginTop":"20px", "lineHeight":"1.5em"}}>
                        Add
                    </Typography> */}
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent className={classes.cartContent}>
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <List />
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </>
    )
}

export default Main
