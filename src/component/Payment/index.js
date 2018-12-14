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
import withFormValidation from '../../container/withFormValidation'

class Payment extends Component {
    render() {
        const { 
            classes, 
            paymentData,
            registerValidation,
            validate,
            hasErrors
        } = this.props
        return (
            <div className={classes.externalBorder}>
                <Paper className={classes.externalPaper} square elevation={0}>
                    <div className={classes.main}>
                        <Typography variant="subtitle1" className={classes.subtitle}>Datos de la tarjeta</Typography>
                        <PaymentForm 
                            registerValidation={registerValidation} 
                            validate={validate}
                            {...paymentData} 
                        />
                    </div>
                    <PaymentSummary />
                </Paper>
                <PaymentButtons hasErrors={hasErrors} />
            </div>
        )
    }
}

export default withFormValidation(withStyles(style)(Payment))