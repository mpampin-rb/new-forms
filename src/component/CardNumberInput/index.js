import React, { Component } from 'react'

import {
    TextField,
    InputAdornment,
    withStyles
} from '@material-ui/core'
import {
    formatCardNumber,
    getMask
} from './cardsHelper'
import withValidation from '../../container/withValidation'

import style from './style'

class CardNumberInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: "",
            fullValue: this.props.cardBin
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.target.value = e.target.value.replace(/ /g, "")
        this.setState({
            value: e.target.value,
            fullValue: `${this.props.cardBin}${e.target.value}`
        })

        this.props.onChange(e)
    }

    render() {
        
        const { classes, cardBin, cardLogo, paymentMethod } = this.props
        
        const mask = getMask(this.state.fullValue, paymentMethod)
        const formatted = formatCardNumber(cardBin, this.state.value, mask)
        
        const inputProps = {
            endAdornment: <InputAdornment position="end"><img src={cardLogo} /></InputAdornment>
        }

        if(cardBin)
            inputProps.startAdornment = <InputAdornment position="start" className={classes.cardBin}>{formatted.bin}</InputAdornment>

        return (
            <TextField
                label="Número"
                type="text"
                helperText={this.props.error ? "Completa este dato" : " "}
                spellCheck={false}
                InputProps={inputProps}
                fullWidth
                {...this.props}
                value={formatted.restOfCC}
                onChange={this.handleChange}
            />
            
        )
    }

}

export default withValidation(value => value.length > 0)(withStyles(style)(CardNumberInput))