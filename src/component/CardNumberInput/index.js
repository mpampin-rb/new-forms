import React, { Component } from 'react'

import {
    TextField,
    InputAdornment,
    withStyles
} from '@material-ui/core'
import {
    getLengthsById,
    formatCardNumber,
    getMask,
    validateBin,
    validateLuhnAlgorithm
} from './cardsHelper'
import withValidation from '../../container/withValidation'

import style from './style'

class CardNumberInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: "",
            fullValue: this.props.cardBin,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value.replace(/ /g, "")
        const fullValue = `${this.props.cardBin}${value}`
        const error = !validateBin(fullValue, this.props.paymentMethod)
        this.setState({
            value,
            fullValue,
            error
        })
        
        e.target.value = fullValue
        this.props.onChange(e)
    }

    render() {
        
        const { classes, cardBin, cardLogo, paymentMethod } = this.props
        
        const mask = getMask(this.state.fullValue, paymentMethod)
        const formatted = formatCardNumber(cardBin, this.state.value, mask)
        
        const inputProps = {
            endAdornment: <InputAdornment position="end"><img src={cardLogo} /></InputAdornment>
        }

        const error = this.state.error || this.props.error

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
                error={error}
                value={formatted.restOfCC}
                onChange={this.handleChange}
            />
            
        )
    }

}

const validation = (value, props) => {
    
    const paymentMethod = props.paymentMethod
    const lengths = getLengthsById(paymentMethod)

    return lengths.includes(value.length) 
        && validateBin(value, paymentMethod)
        && validateLuhnAlgorithm(value)

}

export default withValidation(validation)(withStyles(style)(CardNumberInput))