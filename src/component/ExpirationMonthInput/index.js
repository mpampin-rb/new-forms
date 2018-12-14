import React, { Component } from 'react'

import {
    TextField,
} from '@material-ui/core'
import MaskInput from '../MaskInput'
import withValidation from '../../container/withValidation'
import moment from 'moment'

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

const validation = (value) => {
    return value.match(/^[0-9]{2}\/[0-9]{2}$/)
        && moment().isBefore(moment(value, "MM/YY").endOf('month'))
}

export default withValidation(validation)(ExpirationMonthInput)