import React, { Component } from 'react'

import {
    TextField,
    InputAdornment,
    withStyles
} from '@material-ui/core'
import MaskInput from '../MaskInput'

import style from './style'
import visaImg from '../../images/cards/visa.svg'

class CardNumberInput extends Component {

    render() {

        const { classes } = this.props

        return (
            <MaskInput mask="99 9999 9999">
                <TextField
                    label="Número"
                    type="text"
                    helperText=" "
                    spellCheck={false}
                    autoComplete={false}
                    autoCorrect={false}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" className={classes.cardBin}>4444 44</InputAdornment>,
                        endAdornment: <InputAdornment position="end"><img src={visaImg} /></InputAdornment>
                    }}
                    fullWidth
                />
            </MaskInput>
            
        )
    }

}

export default withStyles(style)(CardNumberInput)