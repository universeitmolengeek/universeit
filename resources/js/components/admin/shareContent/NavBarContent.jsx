import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
export const NavBarContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={1} />
                            </div>
                            <div className='my-4'>
                                <Content id={2} />
                            </div>
                            <div className='my-4'>
                                <Content id={3} />
                            </div>
                            <div className='my-4'>
                                <Content id={4} />
                            </div>
                            <div className='my-4'>
                                <Content id={5} />
                            </div>
                            <div className='my-4'>
                                <Content id={6} />
                            </div>
                            <div className='my-4'>
                                <Content id={7} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

if (document.getElementById('navBarContent')) {
    ReactDOM.render(<NavBarContent />, document.getElementById('navBarContent'));
}