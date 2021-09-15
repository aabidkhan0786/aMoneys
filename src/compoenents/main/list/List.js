import React,{useContext} from 'react'
import {List as MUIList, Slide, ListItem,ListItemAvatar,Avatar, ListItemText, IconButton,ListItemSecondaryAction} from '@material-ui/core'
import {Delete, MoneyOff} from '@material-ui/icons'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../Context/Context'

const List = () => {
    const classes = useStyles();
    const {deleteTransactions, transactions} = useContext(ExpenseTrackerContext)

    // const transactions = [
    //     {
    //         id:1,
    //         type:"Income",
    //         category:"salary",
    //         amount:12000,
    //         date: "4th Nov"
    //     },
    //     {
    //         id:2,
    //         type:"Expense",
    //         category:"Foods",
    //         amount:1200,
    //         date: "6th Nov"
    //     },
    //     {
    //         id:3,
    //         type:"Income",
    //         category:"Poc Money",
    //         amount:12000,
    //         date: "7th Nov"
    //     }
    // ];

    return (
        <>
            <MUIList dense={false} className={classes.list} >
                {transactions.map(trans=>(
                        <Slide direction="down" in mountOnEnter unmountOnExit key={transactions.id} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={trans.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                            <MoneyOff/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={trans.category} secondary={`RS ${trans.amount} - ${trans.date}`} ></ListItemText>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransactions(trans.id)} >
                                            <Delete/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                        </Slide>
                ))
                }
            </MUIList>
        </>
    )
}

export default List
