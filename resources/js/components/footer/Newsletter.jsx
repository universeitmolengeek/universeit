import React from 'react';

export const Newsletter = () => {
    return (
        <div>
            <section class="cta-two-area footer-newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 cta-left">
                            <h1>Inscrivez-vous à notre Newsletter</h1>
                        </div>
                        <div class="col-lg-4 cta-right">
                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get">
                                <div class="input-group">
                                    <input type="text" class="form-control" name="EMAIL" placeholder="Enter Email Address" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Email Address '" required="" type="email" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-default" type="submit">
                                            <span class="lnr lnr-arrow-right"></span>
                                        </button>
                                    </div>
                                    <div class="info"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
