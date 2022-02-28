import React from 'react'
import Filteritem from './filteritem'
import "./filters.css"


const Filters = ({ filterlist }) => {
    return (
        <div className='filters'>
            {filterlist &&
                filterlist.map((filter) => {
                    return <Filteritem filter={filter} key={filter.id} />;
                })}
        </div>
    )
}

export default Filters