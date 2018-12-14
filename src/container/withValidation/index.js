import React, { Component } from 'react'

const withValidation = (validate) => (ValidableInput) => {

    return class extends Component {

        constructor(props) {
            super(props)

            this.state = {
                value: "",
                dirty: false,
                valid: true
            }

            props.registerValidation(props.name)

            this.validate = validate
            this.handleChange = this.handleChange.bind(this)
            this.handleBlur = this.handleBlur.bind(this)
            this.handleFocus = this.handleFocus.bind(this)

        }

        handleChange(e) {
            this.setState({
                value: e.target.value
            })
        }

        handleBlur() {
            const isValid = !this.validate || this.validate(this.state.value, this.props)
            this.setState({
                dirty: true,
                valid: isValid
            })
            this.props.validate(this.props.name, isValid)
        }

        handleFocus() {
            this.setState({
                dirty: false
            })
        }

        render() {

            return <ValidableInput 
                value={this.state.value}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                error={this.state.dirty && !this.state.valid}
                {...this.props} 
            />
        }

    }

}


export default withValidation