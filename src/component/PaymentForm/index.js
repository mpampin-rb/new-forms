import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import CardNumberInput from '../CardNumberInput'
import ExpirationMonthInput from '../ExpirationMonthInput'
import CVVInput from '../CVVInput'
import CardHolderNameInput from '../CardHolderNameInput'
import style from './style'

class PaymentForm extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.formContainer}>
                <form>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <CardNumberInput />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ExpirationMonthInput />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CVVInput />
                        </Grid>
                        <Grid item xs={12}>
                            <CardHolderNameInput />
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }

}

export default withStyles(style)(PaymentForm)