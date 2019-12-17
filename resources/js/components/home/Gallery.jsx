import React from 'react'
import {GalleryItem} from './GalleryItem'

export const Gallery = () =>{
    return(
        <div>
             <section class="gallery-area section-gap" id="sectionGallery">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <GalleryItem />
                    </div>
                    <div class="col-lg-6">
                        <GalleryItem />
                    </div>
                    <div class="col-lg-4">
                        <GalleryItem />
                    </div>
                    <div class="col-lg-4">
                        <GalleryItem />
                    </div>
                    <div class="col-lg-4">
                        <GalleryItem />
                    </div>
                    <div class="col-lg-6">
                        <GalleryItem />
                    </div>
                    <div class="col-lg-6">
                        <GalleryItem />
                    </div>
                </div>
            </div>	
        </section>
        </div>
    )
}