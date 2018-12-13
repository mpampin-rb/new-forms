import React, { Component } from 'react'

import {
    TextField,
} from '@material-ui/core'
import MaskInput from '../MaskInput'
import withValidation from '../../container/withValidation'

class ExpirationMonthInput extends Component {

    render() {

        return (
            <MaskInput mask="99/99" {...this.props}>
                <TextField
                    label="Vencimiento"
                    type="text"
                    helperText=" "
                    spellCheck={false}
                    fullWidth
                    error={this.props.error}
                />
            </MaskInput>
        )
    }

}

export default withValidation(value => value.length > 0)(ExpirationMonthInput)