import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
import ContentArea from '../ContentArea';
export const AboutContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={10} />
                            </div>
                            <div className='my-4'>
                                <ContentArea id={11} />
                            </div>
                            <div className='my-4'>
                                <ContentArea id={12} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

if (document.getElementById('aboutContent')) {
    ReactDOM.render(<AboutContent />, document.getElementById('aboutContent'));
}