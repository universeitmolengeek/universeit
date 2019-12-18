import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { MainBanner } from './header/MainBanner';
import { Navbar } from './header/Navbar';
import { About } from './home/About';
import { Banner } from './banner/Banner';
import { Gallery } from './home/Gallery';
import { Event } from './home/Event';
import { News } from './home/News';
import { Newsletter } from './footer/Newsletter';
import { Footer } from './footer/Footer'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <MainBanner mainBannerType={1} />
            <About />
            <Banner bannerType={1} />
            <Gallery />
            <Banner bannerType={2} />
            <Event />
            <News />
            <Newsletter />
            <Footer />
        </div>
    )
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}