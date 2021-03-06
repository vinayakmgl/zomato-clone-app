import React from 'react'
import Filters from '../common/filters'
import "./delivery.css"
import Deliverycollection from './deliverycollections';

const deliverFilters = [
    {
        id: 1,
        icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Rating: 4.0+",
    },
    {
        id: 3,
        title: "Safe and Hygienic",
    },
    {
        id: 4,
        title: "Pure veg",
    },
    {
        id: 5,
        title: "Delivery Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,

    },
    {
        id: 6,
        title: "Great offer",
    },
]

const Delivery = () => {
    return (
        <div>
            <div className='max-width'>
                <Filters filterlist={deliverFilters} />
            </div>
            <Deliverycollection />
        </div>
    );
};

export default Delivery