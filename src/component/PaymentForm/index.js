import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import CardNumberInput from '../CardNumberInput'
import ExpirationMonthInput from '../ExpirationMonthInput'
import CVVInput from '../CVVInput'
import CardHolderNameInput from '../CardHolderNameInput'
import style from './style'

class PaymentForm extends Component {

    render() {

        const { 
            classes,
            cardBin,
            cardLogo,
            paymentMethod,
            registerValidation,
            validate
        } = this.props

        return (
            <div className={classes.formContainer}>
                <form>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <CardNumberInput 
                                name="cardNumber"
                                cardBin={cardBin} 
                                cardLogo={cardLogo}
                                registerValidation={registerValidation} 
                                validate={validate}
                                paymentMethod={paymentMethod}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ExpirationMonthInput
                                name="expirationMonth"
                                registerValidation={registerValidation} 
                                validate={validate}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CVVInput
                                name="cvv"
                                paymentMethod={paymentMethod} 
                                registerValidation={registerValidation} 
                                validate={validate}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CardHolderNameInput 
                                name="cardHolder"
                                registerValidation={registerValidation} 
                                validate={validate}
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }

}

export default withStyles(style)(PaymentForm)