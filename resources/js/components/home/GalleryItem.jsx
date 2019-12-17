import React from 'react';

export const GalleryItem = () => {
    return (
        <div>
            <a href="img/gallery/g1.jpg" class="img-gal">
                <div class="single-imgs relative">
                    <div class="overlay overlay-bg"></div>
                    <div class="relative">
                        <img class="img-fluid" src="img/gallery/g1.jpg" alt="" />
                    </div>
                </div>
            </a>
        </div>
    )
}

