import React,{useState} from 'react'
import {Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button} from '@material-ui/core'

import useStyles from './styles'

const initState={
    amount:'',
    category:'',
    type:"income",
    date: new Date()
}

const Form = () => {
    const classes =  useStyles();
    const [formData,setFormData] = useState(initState);
    return (
        <>
            <Grid spacing={2} container>
                <Grid item xs={12}>
                    <Typography variant="subtitle2">
                        ...
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type:</InputLabel>
                        <Select value={formData.type} onChange={e=>setFormData({...formData,type:e.target.value})}>
                            <MenuItem value='Income'>Income</MenuItem>
                            <MenuItem value='Expense'>Expense</MenuItem>
                        </Select>
                        
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category:</InputLabel>
                        <Select value={formData.category} onChange={e=>setFormData({...formData,category:e.target.value})}>
                            <MenuItem value='Business'>Business</MenuItem>
                            <MenuItem value='Rent'>Rent</MenuItem>
                        </Select>
                        
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={e=>setFormData({...formData,amount:e.target.value})}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField type="date" className={classes.form_padd}  fullWidth value={formData.type} onChange={e=>setFormData({...formData,type:e.target.value})}/>
                </Grid>
                <Button className={classes.buttons} variant="outlined" color="secondary" fullWidth >Create</Button>
            </Grid>
        </>
    )
}

export default Form
