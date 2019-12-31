import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Event = () => {    

    const [loader, setLoader] = useState(true);

    const [event, setEvent] = useState();

    useEffect(()=>{
        axios.get(`/api${window.location.pathname}`).then(response => {
           setEvent(response.data); 
           setLoader(false);
        })       
    },[]);

    const deleteEvent = () => {
        axios.delete(window.location.pathname).then
    }

   
    return (
        <div>                                   
           {
               !loader &&
               <div>
                    <h2>Titre: {event.title}</h2>
                    <h4>Lieu: {event.place}</h4>
                    <h4>Thème: {event.theme}</h4>
                    <h4>Début: 
                        <ul>
                            <li>Date: {new Date(event.start).toLocaleDateString('fr-FR',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</li>
                            <li>Heure: {new Date(event.start).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})}</li>
                        </ul>
                    </h4>
                    <h4>Fin: 
                        <ul>
                            <li>Date: {new Date(event.end).toLocaleDateString('fr-FR',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</li>
                            <li>Heure: {new Date(event.end).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})}</li>
                        </ul>
                    </h4>
                    <label htmlFor="">Description:</label>
                    <p>{event.description}</p>
                    <a href="/events" onClick={deleteEvent} className="btn btn-danger">Supprimer</a>
               </div>
           }
              
        </div>
    )
}

if (document.getElementById('event')) {
    ReactDOM.render(<Event />, document.getElementById('event'));
}
