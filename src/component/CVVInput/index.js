import React, { Component } from 'react'

import {
    TextField,
    InputAdornment
} from '@material-ui/core'

import CVVHelp from '../CVVHelp'
import MaskInput from '../MaskInput'
import withValidation from '../../container/withValidation'

class CVVInput extends Component {

    constructor(props) {
        super(props)

        // Amex tiene 4 dígitos de CVV
        this.mask = props.paymentMethod === 65 ? "9999" : "999"
    }

    render() {
        return (<MaskInput 
            mask={this.mask}
            {...this.props}
        >
            <TextField
                label="CVV"
                type="text"
                fullWidth
                helperText={`Ingresá los ${this.mask.length} números`}
                spellCheck={false}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><CVVHelp /></InputAdornment>
                }}
                error={this.props.error}
            />
        </MaskInput>
        )
    }

}

export default withValidation(value => value.length > 0)(CVVInput)