import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';


function Artist() {

    const { id } = useParams();

    const { push } = useHistory();

    const [artist, getArtist] = useState({});
    const [albums, getAlbum] = useState([]);


    useEffect(function () {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (response.status === 200) {
                    const artist = response.data.find(artist => artist.id === Number(id));
                    getArtist(
                        artist
                    );

                    axios.get('https://jsonplaceholder.typicode.com/albums')
                        .then((albumResponse) => {
                            if (albumResponse.status === 200) {
                                const albums = albumResponse.data.filter(album => album.userId === artist.id);
                                getAlbum(
                                    [...albums]
                                );
                            }
                        });


                }
            });

    });






    return (
        <div className="container">
            <h1>Each Artist Page</h1>

            <h2>{artist.name}</h2>

            <p>Albums</p>

            {albums.map((album) => (


                <Link to={`/album/${album.id}`} key={album.id}>
                    <div className="card">
                        <div className="card-boby">
                            <div className="card-text"><p>{album.title}</p></div>
                        </div>
                    </div>
                </Link>

            ))}


            <br />
            <button className="btn btn-small btn-primary" onClick={() => push("/")}>Go back</button>


        </div>
    );

}

export default Artist;