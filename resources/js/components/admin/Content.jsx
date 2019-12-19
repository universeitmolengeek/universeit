import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = ({ id }) => {

    const [item, setItem] = useState();

    const [input, setInput] = useState()

    useEffect(() => {
        axios.get(`/content/${id}`).then(response => {
            setItem(response.data);
            setInput(response.data.content);
        })
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        if (input) {
            axios.put(`content/${id}`, { content: input }).then();
        }
    }

    return (
        <div>
            {
                item &&
                <div className='container'>
                    <label>{item.placement}</label>
                    <input type="text" class="form-control" onChange={handleChange} value={input} />
                    <button class="btn btn-primary mt-2" onClick={handleClick}>Valider</button>
                </div>
            }
        </div>
    )
}

export default Content
