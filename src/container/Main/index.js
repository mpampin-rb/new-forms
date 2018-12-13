import React, { Component } from 'react'
import Top from '../../component/Top'
import Payment from '../../component/Payment'
import Footer from '../../component/Footer'

const paymentData = {
    cardBin: "444444",
    paymentMethod: 65,
    cardLogo: "/images/cards/generic.svg"
}

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Top />
                <Payment paymentData={paymentData} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
  