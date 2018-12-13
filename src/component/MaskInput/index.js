import React from 'react';
import InputMask from 'react-input-mask'

class MaskInput extends React.Component {
    render() {
        return (
            <InputMask mask={this.props.mask} alwaysShowMask={false} maskChar="" {...this.props}>
                {() => this.props.children}
            </InputMask>
        )
    }
}

export default MaskInput