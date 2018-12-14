import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    withStyles
} from '@material-ui/core'
import Logo from '../Logo'

import style from './style';

class Top extends React.Component {

    render() {

        const { classes, formData } = this.props
        return <AppBar position="static" className={classes.top}>
                    <Toolbar className={classes.topContainer}>
                        <Logo src={formData.brandLogo} />
                        <Typography variant="body1" color="inherit" className={classes.title}>
                            {formData.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
    }

}

export default withStyles(style)(Top)