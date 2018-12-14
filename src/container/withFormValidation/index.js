import React, { Component } from 'react'
import some from 'lodash/some'

const withFormValidation = (ValidableForm) => {

    return class extends Component {

        constructor(props) {
            super(props)

            this.state = {
                validations: {},
                hasErrors: true
            }

            this.registerValidation = this.registerValidation.bind(this)
            this.validate = this.validate.bind(this)
            this.updateError = this.updateError.bind(this)
        }

        registerValidation(id) {
            const validations = this.state.validations
            validations[id] = false
            this.setState({validations})
        }

        validate(id, isValid) {
            const validations = this.state.validations
            validations[id] = isValid
            this.setState({validations})
            this.updateError()
        }

        updateError() {
            const hasErrors = some(this.state.validations, valid => !valid)
            this.setState({hasErrors})
        }

        shouldComponentUpdate(_, nextState) {
            return this.state.hasErrors != nextState.hasErrors
        }

        render() {

            return <ValidableForm 
                hasErrors={this.state.hasErrors}
                registerValidation={this.registerValidation}
                validate={this.validate}
                {...this.props} 
            />
        }

    }

}


export default withFormValidation