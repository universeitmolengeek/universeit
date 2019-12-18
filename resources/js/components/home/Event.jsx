import React, { useState } from 'react'
import Calendrier from 'react-calendar';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Event = () => {
    const [date, setDate] = useState(new Date());
    const dates = [new Date('December 18, 2019'), new Date('December 12, 2019'), new Date('December 10, 2019'), new Date('December 25, 2019')]

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-6">
                    <Calendrier
                        value={date}
                        // className={}
                    // tileClassName={({ date, view }) =>view === 'month' && dates.find( element => element.getDate()=== date.getDate() && element.getMonth) ? 'bg-success' : null}
                    />
                </div>
                <div className="col-lg-6">
                    {/* {
                    dates.map(e => {
                         if(e.getDate() == date.getDate()){
                         return <div>{e.getDate()}</div>
                        }
                    })
                } */}
                </div>
            </div>
        </div>
    )
}

export { Event };
