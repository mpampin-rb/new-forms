import React, { Component } from 'react'
import style from './style'

import {
    withStyles,
    IconButton
} from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

class CVVInput extends Component {

    render() {

        return (
            <React.Fragment>
                <IconButton className={this.props.classes.helpButton} tabIndex={-1}><HelpOutlineIcon /></IconButton>
            </React.Fragment>
        )
    }

}

export default withStyles(style)(CVVInput)