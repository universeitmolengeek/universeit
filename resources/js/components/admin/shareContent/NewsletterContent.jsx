import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
export const NewsletterContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={16} />

                            </div>
                            <div className='my-4'>
                                <Content id={17} />
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

if (document.getElementById('newsletterContent')) {
    ReactDOM.render(<NewsletterContent />, document.getElementById('newsletterContent'));
}