import React, { Component } from 'react'

import {
    TextField,
    InputAdornment
} from '@material-ui/core'

import CVVHelp from '../CVVHelp'
import MaskInput from '../MaskInput'
import withValidation from '../../container/withValidation'

const isAmex = paymentMethod => paymentMethod === 65

class CVVInput extends Component {

    constructor(props) {
        super(props)

        this.mask = isAmex(props.paymentMethod) ? "9999" : "999"
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

const validation = (value, props) => {
    return isAmex(props.paymentMethod) ? value.length === 4 : value.length === 3
}

export default withValidation(validation)(CVVInput)