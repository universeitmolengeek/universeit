import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MainBanner = ({ mainBannerType }) => {

    const [bannerItems, setBannerItems] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (mainBannerType === 1) {
            axios.get('/bannerHome').then(response => {

                setBannerItems(response.data);

                setLoader(false);

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
            {mainBannerType === 1 && !loader ? (<section class="banner-area relative" id="home">
                <div class="overlay overlay-bg custom-overlay"></div>
                <div class="container">
                    <div class="row  custom-height-mainBanner d-flex align-items-center">
                        <div class="banner-content col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 class="text-uppercase text-mainBanner">
                                {bannerItems[0].content}
                            </h1>
                            <a href="#" class="primary-btn text-uppercase mt-5 custom-btn-mainBanner p-4"> {bannerItems[1].content}</a>
                        </div>
                    </div>
                </div>
            </section>) : null}

            {mainBannerType === 2 && !loader ? (<section class="banner-area relative about-banner" id="home">
                <div class="overlay overlay-bg"></div>
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="about-content col-lg-12">
                            <h1 class="text-white">
                                {bannerItems.content}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>) : null}


        </>
    )
}
