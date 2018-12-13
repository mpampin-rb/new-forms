import React, { Component } from 'react'

import {
    TextField,
} from '@material-ui/core'

class CardHolderNameInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value.replace(/[^a-z ]/gi, '').toUpperCase()
        })
    }
    
    render() {

        return (<TextField
            label="Nombre y apellido"
            maxLength={80}
            fullWidth
            helperText="Como figura en el plástico"
            spellCheck={false}
            autoComplete={false}
            autoCorrect={false}
            value={this.state.value}
            onChange={this.onChange}
        />)
    }

}

export default CardHolderNameInput