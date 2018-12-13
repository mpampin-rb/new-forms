import React, { Component } from 'react'

import {
    TextField,
    InputAdornment
} from '@material-ui/core'

import CVVHelp from '../CVVHelp'
import MaskInput from '../MaskInput'

class CVVInput extends Component {

    render() {

        return (<MaskInput mask="999">
            <TextField
                label="CVV"
                type="text"
                fullWidth
                helperText="Ingresá los 3 números"
                spellCheck={false}
                autoComplete={false}
                autoCorrect={false}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><CVVHelp /></InputAdornment>
                }}
            />
        </MaskInput>
        )
    }

}

export default CVVInput