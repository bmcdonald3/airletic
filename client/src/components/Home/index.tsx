//@ts-nocheck
import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function getVideos() {
            try {
                const res = await fetch('/videos');
                const data = await res.json();
                setVideos([...data])
            } catch (error) {
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
                        <Fragment key={video.id}>
                        <Grid item sm={3} />
                        <Grid item sm={6}>
                            <Link to={`/player/${video.id}`}>
                                <img src={`/${video.poster}`} alt={video.name} />
                                <div>
                                    <p>{video.name}</p>
                                    <p>{video.duration}</p>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item sm={3} />
                        </Fragment>
                    );
                })}
            </Grid>
        </>
    );
}

export default Home
