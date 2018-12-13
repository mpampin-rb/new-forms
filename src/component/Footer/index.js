import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import style from './style'
import decdLogo from '../../images/templates/sps-footer.png'

class Footer extends Component {

    render() {

        return (
            <div className={this.props.classes.footer}>
                <img src={decdLogo} className={this.props.classes.footerImg} />
            </div>
        )

    }

}

export default withStyles(style)(Footer)