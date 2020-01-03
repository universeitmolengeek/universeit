import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const About = () =>{

    const [aboutItems, setAboutItems] = useState();
    const [loader, setLoader] = useState(true);
    const [navItem, setNavItem] = useState();

    useEffect(()=>{
        axios.get('/about').then(response=>{
            setAboutItems(response.data);
            setLoader(false);
        });
        axios.get('/nav').then(response=>{
            setNavItem(response.data);
            setLoader(false);
            
        })
    },[])

    
    return(
        <div>
           { (!loader && navItem && aboutItems)&&(<section className="info-area pb-120 pt-5 mt-5 d-flex align-items-center section-about" id={navItem[3].content}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 no-padding info-area-left">
                            <img className="img-fluid" src="img/about-img.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 info-area-right">
                            <h1>{aboutItems[0].content}</h1>
                            <p>{aboutItems[1].content}</p>
                            <br/>
                            <p>
                            {aboutItems[2].content}
                            </p>
                        </div>
                    </div>
                </div>	
            </section>)
            }
        </div>
    )
}