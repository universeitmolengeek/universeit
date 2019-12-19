import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
export const FormContactContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={39} />
                            </div>
                            <div className='my-4'>
                                <Content id={40} />
                            </div>
                            <div className='my-4'>
                                <Content id={41} />
                            </div>
                            <div className='my-4'>
                                <Content id={42} />
                            </div>
                            <div className='my-4'>
                                <Content id={43} />
                            </div>
                            <div className='my-4'>
                                <Content id={44} />
                            </div>
                            <div className='my-4'>
                                <Content id={45} />
                            </div>
                            <div className='my-4'>
                                <Content id={46} />
                            </div>
                            <div className='my-4'>
                                <Content id={47} />
                            </div>
                            <div className='my-4'>
                                <Content id={48} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

if (document.getElementById('formContactContent')) {
    ReactDOM.render(<FormContactContent />, document.getElementById('formContactContent'));
}