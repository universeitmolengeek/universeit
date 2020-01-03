import React, { useState, useEffect } from 'react';
import { GalleryItem } from './GalleryItem';

import axios from 'axios'




export const Gallery = () => {

    const [navItems, setNavItems] = useState();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('/nav').then(response => {
            setNavItems(response.data);
            setLoader(false);
        })
    }, [])


    return (
        <div>
            {(!loader && navItems) &&
                <div>
                    <div className='pt-5' id={navItems[4].content}></div>
                    <section className="gallery-area section-gap pt-5 mt-5 gallery-section" >
                        <div className="container pt-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <GalleryItem />
                                </div>
                                <div className="col-lg-6">
                                    <GalleryItem />
                                </div>
                                <div className="col-lg-4">
                                    <GalleryItem />
                                </div>
                                <div className="col-lg-4">
                                    <GalleryItem />
                                </div>
                                <div className="col-lg-4">
                                    <GalleryItem />
                                </div>
                                <div className="col-lg-6">
                                    <GalleryItem />
                                </div>
                                <div className="col-lg-6">
                                    <GalleryItem />
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            }
        </div>
    )
}