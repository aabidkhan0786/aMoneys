import React, { useState, useContext } from 'react'
import { Grid, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@material-ui/core'

import { ExpenseTrackerContext } from '../../../Context/Context'
import useStyles from './styles'
import { v4 as uuidv4 } from 'uuid'
import formatDate from '../../../utilities/formatDate'
import { expenseCategories, incomeCategories } from '../../../Files/Categories'


const initState = {
    amount: '',
    category: '',
    type: "Income",
    date: formatDate(new Date())
}



const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initState);
    const { addTransactions } = useContext(ExpenseTrackerContext);

    const createTransaction = () => {
        if (!formData.amount || !formData.category || !formData.type || !formData.date) {
            return alert("Please add all the fields!!")
        }
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }

        addTransactions(transaction)
        setFormData(initState)
    }

    // console.log(formData);

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories

    return (
        <>
            <Grid spacing={2} container>
                <Grid item xs={12}>
                    {/* <Typography variant="subtitle2">
                        ...
                    </Typography> */}
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type:</InputLabel>
                        <Select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
                            <MenuItem value='Income'>Income</MenuItem>
                            <MenuItem value='Expense'>Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category:</InputLabel>
                        <Select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                            {/* <MenuItem value='Business'>Business</MenuItem>
                            <MenuItem value='Rent'>Rent</MenuItem> */}
                            {
                                selectedCategories.map(cate => (
                                    <MenuItem key={cate.type} value={cate.type}>
                                        {cate.type}
                                    </MenuItem>
                                ))
                            }
                        </Select>

                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} />
                </Grid>
                <Grid item xs={6}>
                    <TextField type="date" className={classes.form_padd} fullWidth value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                </Grid>
                <Button className={classes.buttons} variant="outlined" color="secondary" fullWidth onClick={createTransaction} >Create</Button>
            </Grid>
        </>
    )
}

export default Form
