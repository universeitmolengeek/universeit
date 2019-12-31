import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Newsletter = () => {

    const [newsletterTitle, setNewsletterTitle] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {

        axios.get('/newsletter').then(response => {
            setNewsletterTitle(response.data);
            setLoader(false);
        })

    }, [])

    return (
        <div>{
            !loader &&
            <section className="cta-two-area footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 cta-left">
                            <h1>{newsletterTitle[0].content}</h1>
                        </div>
                        <div className="col-lg-4 cta-right">
                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get">
                                <div className="input-group">
                                    <input type="text" className="form-control" name="EMAIL" placeholder={newsletterTitle[1].content} onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Email Address '" required="" type="email" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <span className="lnr lnr-arrow-right"></span>
                                        </button>
                                    </div>
                                    <div className="info"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        }

        </div>
    )
}
