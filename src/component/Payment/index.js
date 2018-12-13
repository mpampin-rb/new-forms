import React, { Component } from 'react'
import {
    Paper,
    Typography,
    withStyles
} from '@material-ui/core'

import style from './style'
import PaymentForm from '../PaymentForm'
import PaymentSummary from '../PaymentSummary'
import PaymentButtons from '../PaymentButtons'

class Payment extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.externalBorder}>
                <Paper className={classes.externalPaper} square elevation={0}>
                    <div className={classes.main}>
                        <Typography variant="subtitle1" className={classes.subtitle}>Datos de la tarjeta</Typography>
                        <PaymentForm />
                    </div>
                    <PaymentSummary />
                </Paper>
                <PaymentButtons />
            </div>
        )
    }
}

export default withStyles(style)(Payment)