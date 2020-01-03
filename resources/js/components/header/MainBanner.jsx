import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MainBanner = ({ mainBannerType }) => {

    const [bannerItems, setBannerItems] = useState([]);

    const [loader, setLoader] = useState(true);

    const [loader1, setLoader1] = useState(true);

    const [navItems, setNavItems] = useState();


    useEffect(() => {
        if (mainBannerType === 1) {
            axios.get('/bannerHome').then(response => {
                setBannerItems(response.data);
                setLoader(false);

            })
            axios.get('/nav').then(response => {
                setNavItems(response.data);
                setLoader1(false);
            })
        }
        if (mainBannerType === 2) {
            axios.get('/bannerContact').then(response => {

                setBannerItems(response.data);

                setLoader(false);

            })
        }
    }, [])

    return (
        <>
            {mainBannerType === 1 && !loader && navItems ? (<section className="banner-area relative" id="home">
                <div className="overlay overlay-bg custom-overlay"></div>
                <div className="container">
                    <div className="row  custom-height-mainBanner d-flex align-items-center">
                        <div className="banner-content col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="text-uppercase text-mainBanner">
                                {bannerItems[0].content}
                            </h1>
                            <a href={`/#${navItems[3].content}`} className="primary-btn text-uppercase mt-5 custom-btn-mainBanner p-4"> {bannerItems[1].content}</a>
                        </div>
                    </div>
                </div>
            </section>) : null}

            {mainBannerType === 2 && !loader ? (<section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                {bannerItems.content}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>) : null}


        </>
    )
}
