import React, { Component } from 'react'
import {
    Button,
    withStyles
} from '@material-ui/core'
import style from './style'


class PaymentButtons extends Component {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.main}>
                <Button className={classes.cancelButton}>Cancelar</Button>
                <Button variant="contained" className={classes.payButton} color="primary">Pagar</Button>
            </div>
        )
    }

}

export default withStyles(style)(PaymentButtons)