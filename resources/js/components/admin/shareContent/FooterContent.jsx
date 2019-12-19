import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from '../Content';
export const FooterContent = () => {
    return (
        <div>
            <div class="card card-primary">
                <form role="form">
                    <div class="card-body">
                        <div class="form-group">
                            <div className='my-4'>
                                <Content id={18} />
                            </div>
                            <div className='my-4'>
                                <Content id={19} />
                            </div>
                            <div className='my-4'>
                                <Content id={20} />
                            </div>
                            <div className='my-4'>
                                <Content id={21} />
                            </div>
                            <div className='my-4'>
                                <Content id={22} />
                            </div>
                            <div className='my-4'>
                                <Content id={23} />
                            </div>
                            <div className='my-4'>
                                <Content id={24} />
                            </div>
                            <div className='my-4'>
                                <Content id={25} />
                            </div>
                            <div className='my-4'>
                                <Content id={26} />
                            </div>
                            <div className='my-4'>
                                <Content id={27} />
                            </div>
                            <div className='my-4'>
                                <Content id={28} />
                            </div>
                            <div className='my-4'>
                                <Content id={29} />
                            </div>
                            <div className='my-4'>
                                <Content id={30} />
                            </div>
                            <div className='my-4'>
                                <Content id={31} />
                            </div>
                            <div className='my-4'>
                                <Content id={32} />
                            </div>
                            <div className='my-4'>
                                <Content id={33} />
                            </div>
                            <div className='my-4'>
                                <Content id={34} />
                            </div>
                            <div className='my-4'>
                                <Content id={35} />
                            </div>
                            <div className='my-4'>
                                <Content id={36} />
                            </div>
                            <div className='my-4'>
                                <Content id={37} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

if (document.getElementById('footerContent')) {
    ReactDOM.render(<FooterContent />, document.getElementById('footerContent'));
}