import React, { Component } from 'react'

import {
    TextField,
} from '@material-ui/core'
import MaskInput from '../MaskInput'

class ExpirationMonthInput extends Component {

    render() {

        return (
            <MaskInput mask="99/99">
                <TextField
                    label="Vencimiento"
                    type="text"
                    helperText=" "
                    spellCheck={false}
                    autoComplete={false}
                    autoCorrect={false}
                    fullWidth
                />
            </MaskInput>
        )
    }

}

export default ExpirationMonthInput