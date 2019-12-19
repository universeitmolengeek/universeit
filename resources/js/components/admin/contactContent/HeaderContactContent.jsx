import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
export const HeaderContactContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={38} />
                            </div>
                        </div>
                    </div>
                </form>
                <Content id={38}/>
            </div>
        </div>
    )
}

if (document.getElementById('headerContactContent')) {
    ReactDOM.render(<HeaderContactContent />, document.getElementById('headerContactContent'));
}