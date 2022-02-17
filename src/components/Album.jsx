import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

function Album() {

    const { id } = useParams();

    const { push } = useHistory();

    const [photos, getPhotos] = useState([]);

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then((response) => {
                if (response.status === 200) {
                    const photos = response.data.filter(photo => photo.albumId === Number(id));
                    getPhotos(
                        [...photos]
                    );
                }
            });

    })


    return (


        <div className="container">
            <h1>Albums page</h1>
            <div className="row">
                {photos.map(photo => (
                    <div className="col-md-4 col-sm-6 col-xs-12" key={photo.id}>

                        <div className="card">
                            <img className="card-img-top" src={photo.url} alt="Card imagecap" />
                            <p className="card-text">{photo.title}</p>
                        </div>

                    </div>
                ))}

                <br />
                <button className="btn btn-small btn-primary" onClick={() => push("/")}>Go back</button>

            </div>
        </div>

    );
}

export default Album;