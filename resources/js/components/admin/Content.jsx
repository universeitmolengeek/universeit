import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Content = ({id}) =>  {

    const [item, setItem] = useState();

    const [input, setInput] = useState()

    useEffect(()=>{
        axios.get(`/content/${id}`).then(response => {
            setItem(response.data);
            setInput(response.data.content);
        })
    },[]);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        if(input){
            axios.put(`content/${id}`, {content:input}).then();
        }
    }

    return (
        <div>
            {
                item &&
                <div>
                    <p>{item.placement}</p>
                    <input onChange={handleChange} className="form-link" type="text" name="" id="" value={input}/>
                    <button onClick={handleClick} className="btn btn-primary">Edit</button>
                </div>
                
            }
        </div>
    )
}

export default Content
