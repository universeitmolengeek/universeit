import React, { useState, useEffect } from 'react';
import axios from 'axios';


const myStyle = {
    width: '100%',
    height: '445px'
}
const buttonStyle = {
    float: "right"
}

const alert = {
    textAlign: 'left'
}


export const ContactSection = () => {

    const [contactItems, setContactItems] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('/contactItems').then(response => {
            setContactItems(response.data);
            setLoader(false);
        })
    }, [])

    return (
        <div> {<section class="contact-page-area section-gap">
            <div class="container">
                <div class="row">
                    <div class="map-wrap" style={myStyle} id="map"></div>
                    <div class="col-lg-4 d-flex flex-column address-wrap">
                        <div class="single-contact-address d-flex flex-row">
                            <div class="icon">
                                <span class="lnr lnr-home"></span>
                            </div>
                            <div class="contact-details">
                                <h5>{!loader && contactItems[0].content}</h5>
                                <p>
                                    {!loader && contactItems[1].content}
                                </p>
                            </div>
                        </div>
                        <div class="single-contact-address d-flex flex-row">
                            <div class="icon">
                                <span class="lnr lnr-phone-handset"></span>
                            </div>
                            <div class="contact-details">
                                <h5>{!loader && contactItems[2].content}</h5>
                                <p>{!loader && contactItems[3].content}</p>
                            </div>
                        </div>
                        <div class="single-contact-address d-flex flex-row">
                            <div class="icon">
                                <span class="lnr lnr-envelope"></span>
                            </div>
                            <div class="contact-details">
                                <h5>{!loader && contactItems[4].content}</h5>
                                <p>{!loader && contactItems[5].content}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
                            <div class="row">
                                <div class="col-lg-6 form-group">
                                    <input name="name" placeholder={!loader && contactItems[6].content} onFocus="this.placeholder = ''"
                                        onBlur="this.placeholder = 'Enter your name'"
                                        class="common-input mb-20 form-control" required="" type="text" />

                                    <input name="email" placeholder={!loader && contactItems[7].content}
                                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                        onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email address'"
                                        class="common-input mb-20 form-control" required="" type="email" />

                                    <input name="subject" placeholder={!loader && contactItems[8].content} onFocus="this.placeholder = ''"
                                        onBlur="this.placeholder = 'Enter subject'" class="common-input mb-20 form-control"
                                        required="" type="text" />
                                </div>
                                <div class="col-lg-6 form-group">
                                    <textarea class="common-textarea form-control" name="message"
                                        placeholder={!loader && contactItems[9].content} onFocus="this.placeholder = ''"
                                        onBlur="this.placeholder = 'Enter Messege'" required=""></textarea>
                                </div>
                                <div class="col-lg-12">
                                    <div class="alert-msg" style={alert}></div>
                                    <button class="genric-btn primary" style={buttonStyle}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>}

        </div>
    )
}