import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ContentArea = ({id}) =>  {

    const [item, setItem] = useState();

    const [text, setText] = useState()

    useEffect(()=>{
        axios.get(`/content/${id}`).then(response => {
            setItem(response.data);
            setText(response.data.content);
        })
    },[]);

    const handleChange = (e) => {
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
                <div>
                    <p>{item.placement}</p>
                    <textarea onChange={handleChange} className="form-link" type="text" name="" id="">{text}</textarea>
                    <button onClick={handleClick} className="btn btn-primary">Edit</button>
                </div>
                
            }
        </div>
    )
}

export default ContentArea
