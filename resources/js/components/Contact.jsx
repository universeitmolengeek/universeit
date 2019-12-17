import React from 'react';
import ReactDOM from 'react-dom';

import { MainBanner } from './header/MainBanner';
import { Navbar } from './header/Navbar';
import { ContactSection } from './contact/ContactSection';
import { Banner } from './banner/Banner';
import { Teacher } from './contact/Teacher';
import { Newsletter } from './footer/Newsletter';
import { Footer } from './footer/Footer'
export const Contact = () => {
    return (
        <div>
            <Navbar />
            <MainBanner mainBannerType={2} />
            <ContactSection />
            <Banner bannerType={3} />
            <Teacher />
            <Newsletter />
            <Footer />
        </div>
    )
}

if (document.getElementById('contact')) {
    ReactDOM.render(<Contact />, document.getElementById('contact'));
}