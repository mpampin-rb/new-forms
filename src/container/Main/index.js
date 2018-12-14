import React, { Component } from 'react'
import Top from '../../component/Top'
import Payment from '../../component/Payment'
import Footer from '../../component/Footer'

const formData = {
    brandLogo: "/images/logos/swatch.png",
    title: "Relojes de swatch",
    decdLogo: "/images/templates/sps-footer.png"
}

const paymentData = {
    cardBin: "",
    paymentMethod: 1,
    cardLogo: "/images/cards/generic.svg"
}

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Top formData={formData} />
                <Payment paymentData={paymentData} />
                <Footer formData={formData} />
            </React.Fragment>
        );
    }
}

export default Main;
  