import React from 'react'
import { Navbar } from './Navbar'

export const MainBanner = ({ mainBannerType }) => {
    return (
        <>
            {mainBannerType === 1 ? (<section class="banner-area relative" id="home">
                <div class="overlay overlay-bg custom-overlay"></div>
                <div class="container">
                    <div class="row  custom-height-mainBanner d-flex align-items-center">
                        <div class="banner-content col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 class="text-uppercase text-mainBanner">
                                Universe it
                            </h1>
                            <a href="#" class="primary-btn text-uppercase mt-5 custom-btn-mainBanner p-4">Commencer</a>
                        </div>
                    </div>
                </div>
            </section>) : null}

            {mainBannerType === 2 ? (<section class="banner-area relative about-banner" id="home">
                <div class="overlay overlay-bg"></div>
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="about-content col-lg-12">
                            <h1 class="text-white">
                                Contactez-Nous
                    </h1>
                        </div>
                    </div>
                </div>
            </section>) : null}


        </>
    )
}
