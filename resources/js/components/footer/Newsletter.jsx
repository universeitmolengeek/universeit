import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Newsletter = () => {

    const [newsletterTitle, setNewsletterTitle] = useState([]);

    const [loader, setLoader] = useState(true);

    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState();

    useEffect(() => {

        axios.get('/newsletter').then(response => {
            setNewsletterTitle(response.data);
            setLoader(false);
        })

    }, [])

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleClick = () => {
        axios.post("api/subscribers", {email: email}).then(()=>{
            setEmail('');
            setErrors();
        })
        .catch(error => { 
            let tab = [];
            Object.entries(error.response.data.errors).forEach(error=>{
                tab.push(error[1][0]);
            });
            setErrors(tab);
        })
    }

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
                            
                                <div className="input-group">
                                    <input type="text" className="form-control" name="EMAIL" placeholder={newsletterTitle[1].content} onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Email Address '" required="" type="email" value={email} onChange={handleChange}/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" onClick={handleClick}>
                                            <span className="lnr lnr-arrow-right"></span>
                                        </button>
                                    </div>
                                    <div className="info"></div>
                                </div>
                            
                            <div className="text-center">                                   
                                        {
                                            errors && 
                                            <ul className="alert alert-danger">
                                                {
                                                    errors.map((error, index) => {
                                                        return <li key={index}>{error}</li>
                                                    })
                                                }
                                            </ul>                                            
                                        }                                    
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        }

        </div>
    )
}
