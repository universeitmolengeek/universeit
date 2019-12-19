import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
export const HeaderHomeContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={8} />
                                <Content id={9} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

if (document.getElementById('headerHomeContent')) {
    ReactDOM.render(<HeaderHomeContent />, document.getElementById('headerHomeContent'));
}