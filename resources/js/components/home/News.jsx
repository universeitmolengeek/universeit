import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const News = () => {

    const [subTitleNews, setSubTitleNews] = useState();

    const [loader, setLoader] = useState(true);

    const [newsItems, setNewsItems] = useState();

    useEffect(() => {

        axios.get('/subtitleNews').then(response => {
            setSubTitleNews(response.data);
            setLoader(false);
        })
        axios.get('/api/news').then(response => {
            setNewsItems(response.data);
            // console.log(response.data.slice(-1,2))
            setLoader(false);
        })


    }, [])

    return (
        <div>{
            <section className="popular-course-area section-gap d-flex align-items-center" id="sectionNews">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-70 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">{!loader && subTitleNews.content}</h1>
                            </div>
                        </div>
                    </div>

                    {(!loader && newsItems) &&
                    
                        <div className="row">
                        
                            <OwlCarousel className="owl-theme" dotClass='bg-warning mx-2 p-1'>
                                {
                                    newsItems.map((newsItems, index) => {
                                        return (
                                            <div key={index}>
                                                <h4 className="item">{newsItems.title}</h4>
                                                <p className='item'>{newsItems.description}</p>
                                            </div>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </div>
                    }
                </div>
                <div>

                </div>

            </section>

        }
        </div>
    )
}