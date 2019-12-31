import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
export const NewsItem = () => {

    const [newsItem, setNewsItem] = useState();

    const [loader, setLoader] = useState(true);



    useEffect(() => {
        axios.get(`/api${window.location.pathname}`).then(response => {
            setNewsItem(response.data);
            setLoader(false);
        })
    }, [])


    const handleClickDelete = () => {
        console.log(newsItem.id)
        axios.delete('/news/' + newsItem.id).then()
    }

    return (

        <div>
            {
                !loader && (
                    <div>
                        <div className="card card-primary">
                            <div className="card-body">
                                <label htmlFor="">Titre :</label>
                                <p>
                                    {newsItem.title}
                                </p>
                                <label htmlFor="">Description :</label>
                                <p>
                                    {newsItem.description}
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href='/news' className="btn btn-danger mr-2" value={newsItem.id} onClick={handleClickDelete}>Supprimer</a>
                                <a href="/news" className='btn btn-primary'>Retour</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

if (document.getElementById('newsItem')) {
    ReactDOM.render(<NewsItem />, document.getElementById('newsItem'));
}