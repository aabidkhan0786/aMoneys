import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles'
import useTransactions from '../../useTransactions'

const Details = ({ title }) => {
    const classes = useStyles();
    const { chartData, total } = useTransactions(title);

    return (
        <>
            <Card className={title === "Income" ? classes.income : classes.expense}>
                <CardHeader title={title} />
                <CardContent>
                    {
                        total === 0 ?
                            <>
                                <Typography align="center" variant="h5">{title === "Income" ? "Add Income to show chart" : "Add Expense to show chart"}</Typography>
                            </> :
                            <>
                                <Typography variant="h5">Rs {total}</Typography>
                                <Doughnut data={chartData} />
                            </>
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default Details
