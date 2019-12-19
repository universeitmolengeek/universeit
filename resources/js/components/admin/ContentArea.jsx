import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ContentArea = ({id}) =>  {

    const [item, setItem] = useState();

    const [text, setText] = useState()

    useEffect(()=>{
        axios.get(`/content/${id}`).then(response => {
            setItem(response.data);
            setText(response.data.content);
            // console.log(response.data.content);
            
        })
    },[]);

    const handleChange = (e) => {
        console.log(text);
        setText(e.target.value)
    }

    const handleClick = () => {
        if(text){
            axios.put(`content/${id}`, {content:text}).then();
        }
    }

    return (
        <div>
            {
                item &&
                
                <div className='container'>
                    <label>{item.placement}</label>
                    <textarea onChange={handleChange} className="form-control" value={text}></textarea>
                    <button class="btn btn-primary mt-2" onClick={handleClick}>Valider</button>
                </div>
                
            }
        </div>
    )
}

export default ContentArea
