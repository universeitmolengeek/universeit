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
                        <div class="header-top">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                                                    
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                                        <a href="#"><span class="lnr lnr-phone-handset"></span> <span class="text">{navLinks[1].content}</span></a>
                                        <a href="#"><span class="lnr lnr-envelope"></span> <span class="text">{navLinks[0].content}</span></a>			
                                    </div>
                                </div>			  					
                            </div>
                        </div>
                        <div class="container main-menu">
                            <div class="row align-items-center justify-content-between d-flex">
                                <div id="logo">
                                    <a href="/"><img src="/img/logoUniverseit.png" alt="logo" width="75px" /></a>
                                </div>
                                <nav id="nav-menu-container">
                                    <ul class="nav-menu">
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
