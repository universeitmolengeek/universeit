import React from 'react'
import {GalleryItem} from './GalleryItem'

export const Gallery = () =>{
    return(
        <div>
             <section className="gallery-area section-gap" id="sectionGallery">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <GalleryItem />
                    </div>
                    <div className="col-lg-6">
                        <GalleryItem />
                    </div>
                    <div className="col-lg-4">
                        <GalleryItem />
                    </div>
                    <div className="col-lg-4">
                        <GalleryItem />
                    </div>
                    <div className="col-lg-4">
                        <GalleryItem />
                    </div>
                    <div className="col-lg-6">
                        <GalleryItem />
                    </div>
                    <div className="col-lg-6">
                        <GalleryItem />
                    </div>
                </div>
            </div>	
        </section>
        </div>
    )
}