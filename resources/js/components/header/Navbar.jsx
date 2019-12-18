import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return(
        <>
            <header id="header">
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                                            
                            </div>
                            <div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                                <a href="#"><span class="lnr lnr-phone-handset"></span> <span class="text">Se connecter</span></a>
                                <a href="#"><span class="lnr lnr-envelope"></span> <span class="text">S'inscrire</span></a>			
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
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/#sectionAbout">About</a></li>
                            <li><a href="/#sectionGallery">Galerie</a></li>
                            <li><a href="/#sectionNews">News</a></li>
                            <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>		    		
                    </div>
                </div>
            </header>
        </>
    )
}
