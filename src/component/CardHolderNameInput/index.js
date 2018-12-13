import React, { Component } from 'react'
import withValidation from '../../container/withValidation'

import {
    TextField,
} from '@material-ui/core'

class CardHolderNameInput extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.target.value = e.target.value.replace(/[^a-z ]/gi, "").toUpperCase()
        this.props.onChange(e)
    }

    render() {

        return (<TextField
            label="Nombre y apellido"
            fullWidth
            helperText={this.props.error ? "Completa este dato" : "Como figura en el plástico"}
            spellCheck={false}
            {...this.props}
            onChange={this.handleChange}
        />)
    }

}

export default withValidation(value => value.length > 0)(CardHolderNameInput)