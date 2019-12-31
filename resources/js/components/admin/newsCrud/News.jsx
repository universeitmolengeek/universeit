import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';

export const News = () => {

    const [newsItems, setNewsItems] = useState([]);

    const [loader, setLoader] = useState(true);

    const [titleInput, setTitleInput] = useState();

    const [descriptionInput, setDescriptionInput] = useState();

    const [idItem, setIdItem] = useState();

    const [errors, setErrors] = useState();




    useEffect(() => {
        axios.get(`/api/news`).then(response => {
            setNewsItems(response.data);
            if (response.data.length === 0) {
                setIdItem(1);
            } else {
                setIdItem(response.data[response.data.length - 1].id + 1)
            }
            setLoader(false);
        })
    }, [])


    const handleClick = () => {
        axios.post('/news', { title: titleInput, description: descriptionInput, id: idItem })
            .then(
                () => {
                    setNewsItems([...newsItems, { title: titleInput, description: descriptionInput, id: idItem }]);
                    setIdItem(idItem + 1);
                    setErrors();
                    setTitleInput('');
                    setDescriptionInput('');
                }
            )
            .catch(
                error => {
                    let array = []
                    Object.entries(error.response.data.errors).forEach(element=>{
                        array.push(element[1][0])
                    });
                    setErrors(array);
                }
            )

    }

    const handleChange1 = (e) => {
        setTitleInput(e.target.value)

    }
    const handleChange2 = (e) => {
        setDescriptionInput(e.target.value)
    }


    const handleClickDelete = (e) => {
        axios.delete('/news/' + e.target.value).then();
        let filteredArray = newsItems.filter(item => {
            return item.id != e.target.value
        });
        setNewsItems(filteredArray);
        


    }
    return (

        <div>
            {
                !loader && (
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Liste des nouveautés :</h3>
                                    </div>
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Titre</th>
                                                    <th>Description</th>
                                                    <th>Supprimer</th>
                                                    <th>Voir</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    newsItems.map(element => {
                                                        return (
                                                            <tr key={element.id}>
                                                                <td>{element.title}</td>
                                                                <td>{element.description}</td>
                                                                <td> <button className='btn btn-danger' value={element.id} onClick={(e) => { handleClickDelete(e) }}>Supprimer</button></td>
                                                                <td><a className='btn btn-primary' href={`/news/${element.id}`}>Voir</a></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Ajouter une nouveauté :</h3>
                                    </div>

                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Entrez Un Titre</label>
                                            <input type="text" className="form-control" onChange={handleChange1} required value={titleInput} />
                                        </div>
                                        <div className="form-group">
                                            <label>Entrez Une Description</label>
                                            <textarea className="form-control" onChange={handleChange2} required value={descriptionInput}></textarea>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary" onClick={handleClick} >Ajouter</button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6">
                              {
                                  errors &&
                                  <ul className='alert alert-danger' role='alert'>
                                      {
                                          errors.map((error, index)=>{
                                             return <li key={index}>{error}</li>
                                          })
                                      }
                                  </ul>
                              }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

if (document.getElementById('news')) {
    ReactDOM.render(<News />, document.getElementById('news'));
}