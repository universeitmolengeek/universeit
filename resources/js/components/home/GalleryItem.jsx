import React from 'react';

export const GalleryItem = () => {
    return (
        <div>
            <a href="img/gallery/g1.jpg" className="img-gal">
                <div className="single-imgs relative">
                    <div className="overlay overlay-bg"></div>
                    <div className="relative">
                        <img className="img-fluid" src="img/gallery/g1.jpg" alt="" />
                    </div>
                </div>
            </a>
        </div>
    )
}

