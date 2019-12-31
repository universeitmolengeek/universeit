import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Calendar from 'react-calendar';

const Events = () => {

    const [date, setDate] = useState(new Date());

    const [loader, setLoader] = useState(true);

    const [events, setEvents] = useState();

    const [id, setId] = useState();

    const [errors, setErrors] = useState();

    const [inputs, setInputs] = useState({
        startDate:"",
        startTime:"",
        endDate:"",
        endTime:"",
        title:"",
        theme:"",
        place:"",
        description:""
    })

    useEffect(()=>{
        axios.get('/api/events' ).then(response => {
           setEvents(response.data); 
           if(response.data.length == 0){
              setId(1);
           } else{
               setId(response.data[response.data.length -1].id+1);                 
           }
           setLoader(false);
        })       
    },[]);

    const changeDate = (date) => {
        setDate(date)
    }

    const handleClick = (e) => {
        
        let filter = events.filter( event => event.id != e.target.value);

        setEvents(filter);     
        
        axios.delete(`/events/${e.target.value}`).then();
    }

    const changeTitle = (e) => {  
        setInputs({...inputs, title: e.target.value});
    }

    const changeTheme = (e) => {  
        setInputs({...inputs, theme: e.target.value});
    }

    const changePlace = (e) => {  
        setInputs({...inputs, place: e.target.value});
    }

    const changeDescription = (e) => {  
        setInputs({...inputs, description: e.target.value});
    }

    const changeStartDate = (e) => {  
        setInputs({...inputs, startDate: e.target.value});
    }

    const changeStartTime = (e) => {  
        setInputs({...inputs, startTime: e.target.value});
    }

    const changeEndDate = (e) => {  
        setInputs({...inputs, endDate: e.target.value});
    }

    const changeEndTime = (e) => {  
        setInputs({...inputs, endTime: e.target.value});
    }


    const postEvent = () => {
        let data = inputs;

        data.start = `${inputs.startDate} ${inputs.startTime}:00`;
        
        data.end = `${inputs.endDate} ${inputs.endTime}:00`;  

        data.id= id;

        console.log(data);
        

        if(data.startDate && data.startTime && data.endDate && data.endTime){
            if(new Date(data.start)>new Date(data.end)){
                setErrors(["La date de fin est avant la date de début"]);          
            } 
            else if(new Date(data.start).getTime() == new Date(data.end).getTime()){
                setErrors(["L'événement débute et termine au même moment"]);
            }else if(new Date(data.start).getTime()<new Date().getTime()){                
                setErrors(["La date de début est déja passé"]);
            }else{                
                axios.post('/events', data ).then(() => {

                        setEvents([...events,data]);

                        setInputs({
                            startDate:"",
                            startTime:"",
                            endDate:"",
                            endTime:"",
                            title:"",
                            theme:"",
                            place:"",
                            description:""
                        });

                        setId(id +1);
                    }
                    
                )
                .catch(error => { 
                        let tab = [];
                        Object.entries(error.response.data.errors).forEach(error=>{
                            tab.push(error[1][0]);
                        });
                        setErrors(tab);
                })
                
                
            }                      
        }else{
            axios.post('/events', data ).then()
            .catch(error => {                       
                if(error.response.data.errors){

                    let tab = [];
                    Object.entries(error.response.data.errors).forEach(element=>{
                        tab.push(element[1][0]);
                    });
                    setErrors(tab);
                }                               
            });
        }
    }

    return (
        <div>                                   
           {
                
                    <div>
                        <div className="row">
                            {
                            !loader &&  events.length !== 0 ? 
                            <div className="col-6">
                                <Calendar
                                className="m-5"
                                value={date}
                                tileClassName={({ date, view }) =>view === 'month' && events.find( element => new Date(element.start).getDate()=== date.getDate() && new Date(element.start).getMonth()=== date.getMonth() && new Date(element.start).getYear()=== date.getYear()) ? 'bg-success' : null}
                                onChange={changeDate}
                                activeStartDate={new Date()}
                                />  
                                <h1>Événements:</h1>
                                <ul>
                                    {
                                    events.find( element => new Date(element.start).getDate()=== date.getDate() && new Date(element.start).getMonth()=== date.getMonth() && new Date(element.start).getYear()=== date.getYear()) ? 
                                    
                                    events.map( event => {        
                                        
                                            if(new Date(event.start).getDate()=== date.getDate() && new Date(event.start).getMonth()=== date.getMonth() && new Date(event.start).getYear()=== date.getYear()){
                                                return (                                      
                                                    <li key={event.id}>
                                                        <h2>{event.title}</h2>
                                                        <a href={`/events/${event.id}`} className="btn btn-primary">Voir</a>
                                                        <button onClick={(e) => handleClick(e)} value={event.id} className="btn btn-danger">Supprimer</button>
                                                    </li>
                                                
                                                    )
                                        } 
                                        }) : <h2>Pas d'événement ajd</h2> 
                                        
                                    }
                                </ul>
                            </div>
                            
                                : 
                            <div className="col-6">
                                <Calendar
                                className="m-5"
                                value={date}                
                                />  
                                <h1>Aucun Événement</h1>
                            </div>  
                            
                            }
                            <div className="col-6">
                                <h2 className="text-center">Ajouter Événement</h2>
                                <div className="row p-3">
                                    <div className="col-6 d-flex flex-column align-items-center">
                                        <label htmlFor="">Date de début:</label>
                                        <input onChange={(e) => changeStartDate(e)} value={inputs.startDate} className="m-2" type="date" />
                                        <label htmlFor="">Heure de début:</label>
                                        <input onChange={(e) => changeStartTime(e)} value={inputs.startTime} className="m-2" type="time" />
                                        <label htmlFor="">Date de fin:</label>
                                        <input onChange={(e) => changeEndDate(e)} value={inputs.endDate} className="m-2" type="date" />
                                        <label htmlFor="">Heure de fin:</label>
                                        <input onChange={(e) => changeEndTime(e)} value={inputs.endTime} className="m-2" type="time" />
                                        <button onClick={postEvent} className="btn btn-success my-3">Ajouter</button>
                                    </div>
                                    <div className="col-6 d-flex flex-column align-items-center">
                                        <label htmlFor="">Titre:</label>
                                        <input onChange={(e) => changeTitle(e)} value={inputs.title} className="m-2" type="text" />
                                        <label htmlFor="">Theme:</label>
                                        <input onChange={(e) => changeTheme(e)} value={inputs.theme} className="m-2" type="text" />
                                        <label htmlFor="">Lieu:</label>
                                        <input onChange={(e) => changePlace(e)} value={inputs.place} className="m-2" type="text" />
                                        <label htmlFor="">Description:</label>
                                        <textarea onChange={(e) => changeDescription(e)} value={inputs.description}  cols="30" rows="5"></textarea>
                                    </div> 
                                </div>
                                <div className="text-center">                                   
                                        {
                                            errors && 
                                            <ul className="alert alert-danger">
                                                {
                                                    errors.map((error, index) => {
                                                        return <li key={index}>{error}</li>
                                                    })
                                                }
                                            </ul>                                            
                                        }                                    
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>
                                 
            }
        </div>
    )
}

if (document.getElementById('events')) {
    ReactDOM.render(<Events />, document.getElementById('events'));
}
