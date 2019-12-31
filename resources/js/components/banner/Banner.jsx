import React,{useState,useEffect} from 'react';
import axios from 'axios';



export const Banner = ({bannerType}) =>{

    const [bannerItem, setBannerItem] = useState();

    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        if (bannerType === 1) {
            axios.get('/gallery').then(response => {
                setBannerItem(response.data);
                setLoader(false);
            })
        }
        if (bannerType === 2) {
            axios.get('/newsTitle').then(response => {
                setBannerItem(response.data);
                setLoader(false);
            })
        }
        if (bannerType === 3) {
            axios.get('/teachersTitle').then(response => {
                setBannerItem(response.data);
                setLoader(false);
            })
        }
    },[])


    return(
        <div>
            {bannerType ===1 && !loader ? (<section className="search-course-area relative py-5 custom-height-banner d-flex align-items-center"> 
                <div className="overlay overlay-bg custom-overlay"></div>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 search-course-left d-flex justify-content-center">
                            <h1 className="text-white title-banner background-color-orange p-2">
                                {bannerItem.content}
                            </h1>
                        </div>
                    </div>
                </div>	
            </section>) : null }

            {bannerType ===2 && !loader ? (<section className="cta-one-area relative section-gap custom-height-banner d-flex align-items-center">
            <div className="container">
                <div className="overlay overlay-bg"></div>
                <div className="row justify-content-center">
                    <div className="wrap">
                        <h1 className="text-white title-banner background-color-blue p-2">{bannerItem.content}</h1>							
                    </div>					
                </div>
            </div>	
        </section>) : null }

        {bannerType === 3 && !loader ? (<section className="cta-one-area relative section-gap custom-height-banner d-flex align-items-center">
        <div className="container">
            <div className="overlay overlay-bg"></div>
            <div className="row justify-content-center">
                <div className="wrap">
                    <h1 className="text-white title-banner background-color-blue p-2">{bannerItem.content}</h1>							
                </div>					
            </div>
        </div>	
    </section>): null}
            
        </div>
    )
}