import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Footer = () => {

    const [footerLinks, setFooterLinks] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('/footer').then(response => {
            setFooterLinks(response.data);
            setLoader(false);
        })
    }, [])

    return (
        <div>
            {!loader &&
                <footer class="footer-area section-gap">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <h4>{footerLinks[0].content}</h4>
                                    <ul>
                                        <li><a href="#">{footerLinks[4].content}</a></li>
                                        <li><a href="#">{footerLinks[5].content}</a></li>
                                        <li><a href="#">{footerLinks[6].content}</a></li>
                                        <li><a href="#">{footerLinks[7].content}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <h4>{footerLinks[1].content}</h4>
                                    <ul>
                                        <li><a href="#">{footerLinks[8].content}</a></li>
                                        <li><a href="#">{footerLinks[9].content}</a></li>
                                        <li><a href="#">{footerLinks[10].content}</a></li>
                                        <li><a href="#">{footerLinks[11].content}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <h4>{footerLinks[2].content}</h4>
                                    <ul>
                                        <li><a href="#">{footerLinks[12].content}</a></li>
                                        <li><a href="#">{footerLinks[13].content}</a></li>
                                        <li><a href="#">{footerLinks[14].content}</a></li>
                                        <li><a href="#">{footerLinks[15].content}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <h4>{footerLinks[3].content}</h4>
                                    <ul>
                                        <li><a href="#">{footerLinks[16].content}</a></li>
                                        <li><a href="#">{footerLinks[17].content}</a></li>
                                        <li><a href="#">{footerLinks[18].content}</a></li>
                                        <li><a href="#">{footerLinks[19].content}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4  col-md-6 col-sm-6">

                            </div>
                        </div>

                    </div>
                </footer>}

        </div>
    )
}