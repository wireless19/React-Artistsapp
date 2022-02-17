import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Artists.css";

function Artists() {

    const [artists, getArtists] = useState([]);

    useEffect(function () {
        axios.get("https://jsonplaceholder.typicode.com/users").then((artistsList) => {
            getArtists(artistsList.data);
        });
    }, []);

    return (
        <div className="container">

            <h1>ARTISTS</h1>
            <p>Click each Artist to view their album</p>

            {artists.map((allArtists) => (
                <article key={allArtists.id}>
                    <Link to={`/artist/${allArtists.id}`}>
                        <h3>{allArtists.name}</h3>
                    </Link>
                </article>

            ))}
        </div>
    );

}

export default Artists;