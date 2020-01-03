import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';


const Event = () => {

    const [date, setDate] = useState(new Date());

    const [loader, setLoader] = useState(true);

    const [loader1, setLoader1] = useState(true);

    const [events, setEvents] = useState();

    const [event, setEvent] = useState();

    const [navItems, setNavItems] = useState();


    useEffect(() => {
        axios.get('/api/events').then(response => {
            setEvents(response.data);
            setLoader(false);
        })
        axios.get('/nav').then(response => {
            setNavItems(response.data);
            setLoader1(false);
        })
    }, []);

    const changeDate = (date) => {
        setDate(date)
    }


    const handleClick = (e, id) => {
        axios.get(`api/events/${id}`).then(response => {
            setEvent(response.data);
        })
    }

    const exit = () => {
        setEvent();
    }


    return (
        <div>
            {(!loader && navItems) &&
                <div id={navItems[5].content} className='padding-event'>

                    <div>
                        {
                            !loader && events.length !== 0 ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 p-0 d-flex justify-content-center">
                                            <Calendar
                                                className="mt-5"
                                                value={date}
                                                tileClassName={({ date, view }) => view === 'month' && events.find(element => new Date(element.start).getDate() === date.getDate() && new Date(element.start).getMonth() === date.getMonth() && new Date(element.start).getYear() === date.getYear()) ? 'bg-success' : null}
                                                onChange={changeDate}
                                                activeStartDate={new Date()}
                                            />
                                        </div>
                                        <div className="col-6 p-0 d-flex flex-column align-items-center">
                                            {
                                                event ?
                                                    <div>
                                                        <button onClick={exit} type="submit" class="close bg-danger p-2" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <h1 className="mt-5">Événement:</h1>
                                                        <h2>Titre: {event.title}</h2>
                                                        <h4>Lieu: {event.place}</h4>
                                                        <h4>Thème: {event.theme}</h4>
                                                        <h4>Début:
                                                            <ul>
                                                                <li>Date: {new Date(event.start).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
                                                                <li>Heure: {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</li>
                                                            </ul>
                                                        </h4>
                                                        <h4>Fin:
                                                        <ul>
                                                            <li>Date: {new Date(event.end).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
                                                            <li>Heure: {new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</li>
                                                        </ul>
                                                        </h4>
                                                        <label htmlFor="">Description:</label>
                                                        <p>{event.description}</p>
                                                    </div>
                                                    :
                                                    <>
                                                        <h1 className="mt-5">Événements:</h1>
                                                        <ul>
                                                            {
                                                                events.find(element => new Date(element.start).getDate() === date.getDate() && new Date(element.start).getMonth() === date.getMonth() && new Date(element.start).getYear() === date.getYear()) ?

                                                                    events.map(event => {

                                                                        if (new Date(event.start).getDate() === date.getDate() && new Date(event.start).getMonth() === date.getMonth() && new Date(event.start).getYear() === date.getYear()) {
                                                                            return (
                                                                                <li key={event.id}>
                                                                                    <h2>{event.title}</h2>
                                                                                    <button onClick={(e) => handleClick(e, event.id)} className="btn btn-primary">Voir</button>
                                                                                </li>

                                                                            )
                                                                        }
                                                                    }) : <h2>Pas d'événement ajd</h2>

                                                            }
                                                        </ul>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                </div>

                                :
                                <div className="container">
                                    <div className="row m-0">
                                        <div className="col-6">
                                            <Calendar
                                                className="my-5"
                                                value={date}
                                            />

                                        </div>
                                        <div className="col-6">
                                            <h1 className="mt-5">Aucun Événement</h1>
                                        </div>
                                    </div>
                                </div>

                        }

                    </div>

                </div>
            }
        </div>

    )
}

export { Event };
