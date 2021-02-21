//@ts-nocheck
import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function getVideos() {
            try {
                const res = await fetch('http://localhost:4000/videos');
                const data = await res.json();
                setVideos([...data])
            } catch (error) {
                console.log(':(')
                console.log(error);
            }
        };
        getVideos();
    }, []);

    return(
        <>
            <Grid container>
                {videos.map(video => {
                    return(
                        <>
                        <Grid item sm={3} />
                        <Grid item key={video.id} sm={6}>
                            <Link to={`/player/${video.id}`}>
                                <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                <div>
                                    <p>{video.name}</p>
                                    <p>{video.duration}</p>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item sm={3} />
                        </>
                    );
                })}
            </Grid>
        </>
    );
}

export default Home
