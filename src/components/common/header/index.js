import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <div className='max-width heade-right'>
            <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="Zomato-logo"
                className="header-logo"
            />

            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            <i className='fi fi-sr-marker absolute-center location-icon'></i>
                            <div>Bangalore</div>
                        </div>
                        <i class='fi fi-rr-caret-down absolute-center'></i>
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchbar'>
                        <i className='fi fi-rs-search absolute-center search-icon'></i>
                        <input placeholder='search for restaurant, cuisine or a dish ' className='search-input' />
                    </div>
                    <div className='profile-wrapper'>
                        <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
                            alt="profile"
                            className="header-profile-image"
                        />
                        <span className='header-username'>vinu</span>
                        <i className="fi fi-ss-angle-down absolute-center profile-options-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header