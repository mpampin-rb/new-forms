import React, { Component } from 'react'
import { 
    Paper, 
    withStyles, 
    Typography
} from '@material-ui/core'
import style from './style'

class PaymentSummary extends Component {

    render() {

        const { classes } = this.props

        return (
            <Paper className={classes.main} square elevation={0}>
                <Typography variant="h4" className={classes.leftText}>A pagar</Typography>
                <span>
                    <Typography variant="h4" className={classes.priceText}>$5.400.99</Typography>
                    <Typography variant="body1" className={classes.installmentText} align="right">en 3 cuotas</Typography>
                </span>
            </Paper>
        )
    }

}

export default withStyles(style)(PaymentSummary)