import React, { Component } from 'react'
import Top from '../../component/Top'
import Payment from '../../component/Payment'
import Footer from '../../component/Footer'

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Top />
                <Payment />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
  