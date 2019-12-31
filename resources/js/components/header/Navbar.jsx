import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Navbar = () => {

    const [navLinks, setNavLinks] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        axios.get('/nav').then(response => {
            setNavLinks(response.data);
            setLoader(false);
        })
    },[])

    return(
        <>
            {
                !loader && (
                    <header id="header">
                        <div className="header-top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                                                    
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                                        <a href="#"><span className="lnr lnr-phone-handset"></span> <span className="text">{navLinks[1].content}</span></a>
                                        <a href="#"><span className="lnr lnr-envelope"></span> <span className="text">{navLinks[0].content}</span></a>			
                                    </div>
                                </div>			  					
                            </div>
                        </div>
                        <div className="container main-menu">
                            <div className="row align-items-center justify-content-between d-flex">
                                <div id="logo">
                                    <a href="/"><img src="/img/logoUniverseit.png" alt="logo" width="75px" /></a>
                                </div>
                                <nav id="nav-menu-container">
                                    <ul className="nav-menu">
                                    <li><a href="/">{navLinks[2].content}</a></li>
                                    <li><a href={`/#${navLinks[3].content}`}>{navLinks[3].content}</a></li>
                                    <li><a href={`/#${navLinks[4].content}`}>{navLinks[4].content}</a></li>
                                    <li><a href={`/#${navLinks[5].content}`}>{navLinks[5].content}</a></li>
                                    <li><a href="/contact">{navLinks[6].content}</a></li>
                                    </ul>
                                </nav>		    		
                            </div>
                        </div>
                    </header>
                )
            
            }
        </>
    )
}
