import React, { useState } from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import Taboptions from '../../components/common/tabOptions'
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import Nightlife from '../../components/nightlife';

const Homepage = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <div>
            <Header />
            <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    );
};

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DiningOut />
        case "Nightlife":
            return <Nightlife />
        default:
            return <Delivery />

    }
}

export default Homepage;