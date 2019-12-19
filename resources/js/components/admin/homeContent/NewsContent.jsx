import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
export const NewsContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={14} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

if (document.getElementById('newsContent')) {
    ReactDOM.render(<NewsContent />, document.getElementById('newsContent'));
}