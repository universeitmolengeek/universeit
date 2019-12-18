import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const News = () => {

    const [subTitleNews, setSubTitleNews] = useState();

    const [loader, setLoader] = useState(true);

    useEffect(() => {

        axios.get('/subtitleNews').then(response => {
            setSubTitleNews(response.data);
            setLoader(false);
        })


    }, [])

    return (
        <div>{
            !loader &&
            <section class="popular-course-area section-gap d-flex align-items-center" id="sectionNews">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="menu-content pb-70 col-lg-8">
                            <div class="title text-center">
                                <h1 class="mb-10">{subTitleNews.content}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="active-popular-carusel">
                            <div class="single-popular-carusel">
                                <div class="details">
                                    <a href="#">
                                        <h4>
                                            Learn Designing
                                    </h4>
                                    </a>
                                    <p>
                                        When television was young, there was a hugely popular show based on the still popular fictional characte
                                </p>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="details">
                                    <a href="#">
                                        <h4>
                                            Learn Designing
                                    </h4>
                                    </a>
                                    <p>
                                        When television was young, there was a hugely popular show based on the still popular fictional characte
                                </p>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="details">
                                    <a href="#">
                                        <h4>
                                            Learn Designing
                                    </h4>
                                    </a>
                                    <p>
                                        When television was young, there was a hugely popular show based on the still popular fictional characte
                                </p>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="details">
                                    <a href="#">
                                        <h4>
                                            Learn Designing
                                    </h4>
                                    </a>
                                    <p>
                                        When television was young, there was a hugely popular show based on the still popular fictional characte
                                </p>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="details">
                                    <a href="#">
                                        <h4>
                                            Learn Designing
                                    </h4>
                                    </a>
                                    <p>
                                        When television was young, there was a hugely popular show based on the still popular fictional characte
                                </p>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="details">
                                    <a href="#">
                                        <h4>
                                            Learn Designing
                                    </h4>
                                    </a>
                                    <p>
                                        When television was young, there was a hugely popular show based on the still popular fictional characte
                                </p>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="details">
                                    <a href="#">
                                        <h4>
                                            Learn Designing
                                    </h4>
                                    </a>
                                    <p>
                                        When television was young, there was a hugely popular show based on the still popular fictional characte
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
        </div>
    )
}